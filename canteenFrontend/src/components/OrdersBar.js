import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import RoundSearchBar from "./RoundSearchBar";
import BarButton from "./core/BarButton";
import BorderAppBar from "./core/BorderAppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
    Toolbar: {
        height: "72px",
        justifyContent: "space-between"
    }
};

function OrdersBar({ classes }) {
    return (
        <BorderAppBar position='sticky' color='secondary'>
            <Toolbar className={classes.Toolbar}>
                <div>
                    <BarButton component={Link} to='/orders/pending'>
                        Pending
                    </BarButton>
                    <BarButton component={Link} to='/orders/completed'>
                        Completed
                    </BarButton>
                </div>
                <span>
                    <RoundSearchBar />
                </span>
            </Toolbar>
        </BorderAppBar>
    );
}

export default withStyles(styles)(OrdersBar);
