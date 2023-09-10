import React from "react";
import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";

function MealItem(props) {
  const cartCtx=useContext(CartContext)

    const price= `$${props.price.toFixed(2)}`;// first dollar is to give give dollar output and second is with combination  with curly braces
    // so that output will be upto two dexpcima places.
    const addToCartHandler=(amount)=>{
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }
    return (
    <div>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
            {/* <MealItemForm id={props.id} onAddToCart={addToCartHandler}/> */}
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
      </li>
    </div>
  );
}

export default MealItem;
