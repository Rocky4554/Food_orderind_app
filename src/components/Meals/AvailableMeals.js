import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "./MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];
function AvailableMeals() {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true); // becuase will always starting with laoding
  const [HttpError, setHttpError] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://khanna-app-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responsedata = await response.json();

      let loadedMeals = [];
      for (const key in responsedata) {
        loadedMeals.push({
          id: key,
          name: responsedata[key].name,
          description: responsedata[key].description,
          price: responsedata[key].price,
        });
      }
      setMeals(loadedMeals);
      setisLoading(false);
    };

    fetchMeals().catch((error) => {
      setisLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (HttpError) {
    return (
      <section className={classes.MealsError}>
        <p>{HttpError}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading data.Please Wait.........</p>
      </section>
    );
  }

  const meals_list = Meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes["meals ul"]}>{meals_list}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
