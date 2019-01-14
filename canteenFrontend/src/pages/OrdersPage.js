import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OrdersBar from "../components/OrdersBar";
import OrdersPendingPanel from "./OrdersPendingPanel";
import OrdersCompletedPanel from './OrdersCompletedPanel';

function OrdersPage() {
    return (
        <React.Fragment>
            <OrdersBar />

            <Route path="/pending" component={OrdersPendingPanel} />
            <Route path="/completed" component={OrdersCompletedPanel} />
        </React.Fragment>
    );
}

export default OrdersPage;
