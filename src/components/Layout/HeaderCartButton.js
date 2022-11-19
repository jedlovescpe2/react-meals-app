// Core
import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

// UI
import classes from "./HeaderCartButton.module.css"

// Components
import CartContext from "../../store/cart-context"
import { cleanup } from "@testing-library/react";

const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce( (curNum,item) => { 
      return curNum + item.amount; 
    }, 0);

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const btnClasses = `${classes.button} ${ btnIsHighlighted && classes.bump }`; 

    useEffect(()=>{
      if(items.length === 0 ){
        return;
      }

      setBtnIsHighlighted(true);

      const timer = setTimeout(()=>{
        setBtnIsHighlighted(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };

    },[items]);

    return (
      <button
        className={btnClasses}
        onClick={props.onClick}
      >
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
      </button>
    );
};

export default HeaderCartButton;