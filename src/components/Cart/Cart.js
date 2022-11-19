// Core
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

// UI
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

// Components

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1}, );
  };

  // const DUMMY_CART_ITEMS = [
  //     { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
  //     { id: 'c2', name: 'Sashimi', amount: 1, price: 6.99 },
  //     { id: 'c3', name: 'Barbecue', amount: 3, price: 10.99 },
  // ]

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <div>
      <Modal onClose={props.onClose}>
        {cartItems}

        {!hasItems && <p>Cart is empty.</p>}

        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>

        <div className={classes.actions}>
          <button
            className={classes.button}
            onClick={props.onClose}
          >
            Cancel
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
