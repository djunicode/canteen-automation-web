import React from "react";
import { Route } from "react-router-dom";

import PrimaryBar from "../components/PrimaryBar";

import OrdersPendingPanel from "./OrdersPendingPanel";
import OrdersCompletedPanel from "./OrdersCompletedPanel";

function OrdersPage({ match }) {
    return (
        <React.Fragment>
            <PrimaryBar pos='home' />

            <Route
                path={match.url + "/pending"}
                component={OrdersPendingPanel}
            />
            <Route
                path={match.url + "/completed"}
                component={OrdersCompletedPanel}
            />
        </React.Fragment>
    );
}

export default OrdersPage;
