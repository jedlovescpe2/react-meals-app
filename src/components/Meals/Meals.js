// Core
import React, { useState, Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

// UI


// Components

const Meals = props => {
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>;
};

export default Meals;