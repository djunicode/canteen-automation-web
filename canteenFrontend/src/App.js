import React from "react";
import MenuAppBar from "./components/MenuAppBar";
import ButtonAppBar from "./components/ButtonAppBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePanel from "./layouts/HomePanel";
import OrdersPendingPanel from "./layouts/OrdersPendingPanel";
import OrdersCompletedPanel from "./layouts/OrdersCompletedPanel";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Route exact path="/" component={HomePanel} />
          <Route path="/Orders/pending" component={OrdersPendingPanel} />
          <Route path="/Orders/completed" component={OrdersCompletedPanel} />
          <Route path="/Home" component={HomePanel} />
        </div>
      </Router>
    </div>
  );
}

export default App;
