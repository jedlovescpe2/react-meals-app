// Core
import React, { useState, useRef } from "react";

// UI
import classes from "./Input.module.css";
// Components

const Input = (props) => {

    const inputRef = useRef();

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    );
};

export default Input;
