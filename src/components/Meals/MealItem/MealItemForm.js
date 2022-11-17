// Core
import React, { useState } from "react";
import Input from "../../UI/Input";

// UI
import classes from "./MealItemForm.module.css";

// Components

const MealItemForm = props => {

    const submitHandler = event =>{
       event.preventDefault(); 
       console.log("Submitted: " + props.id);
    };


    return <form onSubmit={submitHandler} className={classes.form}>
        <Input label="Amount" 
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }} 
        />
        <button>+ Add</button>
    </form>;
};

export default MealItemForm;