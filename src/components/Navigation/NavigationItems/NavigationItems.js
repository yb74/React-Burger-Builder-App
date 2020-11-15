import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {NavLink} from "react-router-dom";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavLink to='/' style={{textDecoration: 'none'}}>
            <NavigationItem active>Burger Builder</NavigationItem>
        </NavLink>
        <NavLink to='checkout' style={{textDecoration: 'none'}}>
            <NavigationItem>Checkout</NavigationItem>
        </NavLink>
    </ul>
);

export default navigationItems;