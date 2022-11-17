// Core
import React, { useState } from "react";

// UI
import classes from "./Modal.module.css";

// Components

const Modal = props => {
    return <div>
        <div className={classes.backdrop}>
        </div>;
        <div className={classes.modal}>
            <header>
                <h1>Cart Items</h1>
            </header>
            <content>
                {props.children}
            </content>
           
        </div>
    </div>
};

export default Modal;