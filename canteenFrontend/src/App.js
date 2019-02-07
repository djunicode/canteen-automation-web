import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from "./components/common/AppBar";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <AppBar />
                <Route exact path='/' component={HomePage} />
                <Route path='/orders' component={OrdersPage} />
            </div>
        </Router>
    );
}

export default App;