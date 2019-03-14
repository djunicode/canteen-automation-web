import React from "react";
import { Link } from "react-router-dom";

import BarButton from "../core/BarButton";
import BorderAppBar from "../core/BorderAppBar";
import LargeToolbar from "../core/LargeToolbar";

import "./NavBar.css";

function NavBar(props) {
    let homeClasses = ["first"];
    let ordersClasses = ["second"];
    if (props.pos === "home") {
        homeClasses.push(["active"]);
        ordersClasses.push(["inactive"]);
    } else {
        homeClasses.push(["inactive"]);
        ordersClasses.push(["active"]);
    }

    return (
        <BorderAppBar 
            position='relative'
            color='#ffffff'
        >
            <LargeToolbar className='pad-zero-left'>
                <BarButton
                    className={homeClasses.join(" ")}
                    component={Link}
                    to='/'
                >
                    Home
                </BarButton>
                <BarButton
                    className={ordersClasses.join(" ")}
                    component={Link}
                    to='/orders/pending'
                >
                    Orders
                </BarButton>
            </LargeToolbar>
        </BorderAppBar>
    );
}

export default NavBar;
