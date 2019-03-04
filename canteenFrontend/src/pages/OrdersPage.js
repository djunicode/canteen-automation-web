import React from "react";
import { Route } from "react-router-dom";

import NavBar from "../components/common/NavBar";
import OrdersNavBar from "../components/common/OrdersNavBar";

import CompletedOrders from "../components/OrdersPage/CompletedOrders";
import PendingOrders from "../components/OrdersPage/PendingOrders";

import "./OrdersPage.css";

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

function OrdersPage({ match }) {
    return (
        <React.Fragment>
            <NavBar pos='orders' />

            <div className="OrdersPage">
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

export default OrdersPage;
