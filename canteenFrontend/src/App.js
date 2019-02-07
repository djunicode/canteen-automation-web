import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";

function App() {
    return (
        <Router>
            <React.Fragment>
                <TopBar />
                <Route exact path='/' component={HomePage} />
                <Route path='/orders' component={OrdersPage} />
            </React.Fragment>
        </Router>
    );
}

export default App;