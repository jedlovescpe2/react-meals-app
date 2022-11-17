// Core
import React, { useState } from "react";

// UI
import classes from "./Card.module.css"

// Components

const Card = props => {
    return <div className={classes.card}>
        {props.children}
    </div>;
};

export default Card;