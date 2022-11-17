// Core
import React, { useState } from "react";
import Modal from "../UI/Modal";

// UI
import classes from "./Cart.module.css";

// Components

const Cart = props => {

    const DUMMY_CART_ITEMS = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
        { id: 'c2', name: 'Sashimi', amount: 1, price: 6.99 },
        { id: 'c3', name: 'Barbecue', amount: 3, price: 10.99 },
    ]

    const cartItems = <ul className={classes['cart-items']}>
        { DUMMY_CART_ITEMS.map(item => 
            <li key={item.id}>
                {item.name}
            </li>) }
    </ul>;

    return (
      <div>
        <Modal onClose={props.onClose}>
          {cartItems}

          <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
          </div>

          <div className={classes.actions}>
            <button
              className={classes.button}
              onClick={props.onClose}
            >
              Cancel
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      </div>
    );
};

export default Cart;