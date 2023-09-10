import React from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";
import khanaImage from '../../assests/foodheader.jpg.jpg';
import HeaderCartbutton from "./HeaderCartbutton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Khanan APP</h1>
        <HeaderCartbutton onClick={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={khanaImage} alt="Headerimage" />
      </div>
    </Fragment>
  );
}

export default Header;
