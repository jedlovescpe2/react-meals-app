/// Core
import React, { Fragment } from "react";

// UI
import classes from "./Header.module.css"

// Components
import mealsImage from "../../assets/meals.jpeg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton>Cart</HeaderCartButton>
        </header>

        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious foods."/>
        </div>
    </Fragment>
    ;
}

export default Header;