import React from "react";
import { Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import NavBar from "../components/common/NavBar";
import OrdersNavBar from "./OrdersNavBar";
import CompletedOrders from "./CompletedOrders";
import PendingOrders from "./PendingOrders";

/*
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available; 
*/
const styles = {
    OrdersPage: {
        height: "100%",
   }
}

function OrdersCompletedPanel() {
    return(
        <React.Fragment>
            <OrdersNavBar pos='completed' />
            <CompletedOrders />
        </React.Fragment>
    );
}

function OrdersPendingPanel() {
    return(
        <React.Fragment>
            <OrdersNavBar pos='pending' />
            <PendingOrders />
        </React.Fragment>
    );
}

function OrdersPage({ match, classes }) {
    return (
        <React.Fragment>
            <NavBar pos='orders' />

            <div className={classes.OrdersPage}>
                <Route
                    path={match.url + "/pending"}
                    component={OrdersPendingPanel}
                />
                <Route
                    path={match.url + "/completed"}
                    component={OrdersCompletedPanel}
                />
            </div>
        </React.Fragment>
    );
}

export default withStyles(styles)(OrdersPage);
