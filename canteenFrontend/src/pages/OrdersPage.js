import React from "react";
import { Route } from "react-router-dom";

import NavBar from "../components/common/NavBar";

import OrdersPendingPanel from "./OrdersPendingPanel";
import OrdersCompletedPanel from "./OrdersCompletedPanel";

function OrdersPage({ match }) {
    return (
        <React.Fragment>
            <NavBar pos='home' />

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
