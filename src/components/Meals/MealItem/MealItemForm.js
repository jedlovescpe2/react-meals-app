// Core
import React, {  useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";

// UI
import classes from "./MealItemForm.module.css";

// Components

const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
   
    const submitHandler = event =>{
       event.preventDefault(); 

    const enteredAmount = +amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    
    if(enteredAmount.trim===0 ||
      enteredAmount.trim < 1 ||
        enteredAmount.trim > 5){
          setAmountIsValid(false);
          return; 
      }

      //  console.log("Submitted: "+ enteredAmountNumber);
       
       props.onAddToCart(enteredAmountNumber)
    };


    return (
      <form
        onSubmit={submitHandler}
        className={classes.form}
      >
        <Input
          label="Amount"
          ref={amountInputRef}
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>

        {!amountIsValid && <p>Please enter a valid amount.</p> }
      </form>
    );
};

export default MealItemForm;