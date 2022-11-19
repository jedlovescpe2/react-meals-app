// Core
import React, { useState } from "react";

// UI
import classes from "./CartItem.module.css";
// UI

// Components

const CartItem = props => {
    return <li className={classes['cart-item']} style={{ diplay: 'flex'}} key={props.item.id}>
        <div>
            <h2>{props.item.name}</h2>
            <div className={classes.summary} >
                <span className={classes.price} >${props.item.price}</span>
                <span className={classes.amount} >x {props.item.amount}</span>
            </div>
        </div>
        <div className={classes.actions} >
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
        
    </li>;
};

export default CartItem;