import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BarButton from "./core/BarButton";
import BorderAppBar from "./core/BorderAppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

function PrimaryBar(props) {
    return (
        <BorderAppBar position='sticky' color='secondary'>
            <Toolbar>
                <BarButton component={Link} to='/'>
                    Home
                </BarButton>
                <BarButton component={Link} to='/orders/pending'>
                    Orders
                </BarButton>
            </Toolbar>
        </BorderAppBar>
    );
}

export default PrimaryBar;
