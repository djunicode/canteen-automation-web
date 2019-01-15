import React from "react";
import { Link } from "react-router-dom";

import BarButton from "./core/BarButton";
import BorderAppBar from "./core/BorderAppBar";
import LargeToolbar from "./core/LargeToolbar";

function PrimaryBar() {
    return (
        <BorderAppBar position='sticky' color='secondary'>
            <LargeToolbar>
                <BarButton component={Link} to='/'>
                    Home
                </BarButton>
                <BarButton component={Link} to='/orders/pending'>
                    Orders
                </BarButton>
            </LargeToolbar>
        </BorderAppBar>
    );
}

export default PrimaryBar;
