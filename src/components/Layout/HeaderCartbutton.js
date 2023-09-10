import React from "react";
import classes from "./HeaderCartbutton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import { useContext, useEffect, useState } from "react";

function HeaderCartbutton(props) {
  const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const {items} = cartCtx;
  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if(items.length===0){
      return;
    }
    setbtnIsHighLighted(true);

    const timer=setTimeout(()=>{
      setbtnIsHighLighted(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartbutton;
