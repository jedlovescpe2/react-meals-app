import { useContext, useState, createContext } from "react";

createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
});

const CartContext = (props) => {};
