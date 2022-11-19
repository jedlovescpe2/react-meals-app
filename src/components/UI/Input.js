// Core
import React, { useState, useRef, forwardRef } from "react";

// UI
import classes from "./Input.module.css";
// Components

const Input = forwardRef((props, ref) => {
    // const inputRef = useRef();

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;
