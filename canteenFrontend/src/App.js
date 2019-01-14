import React from "react";
import MenuAppBar from "./components/MenuAppBar";
import ButtonAppBar from "./components/ButtonAppBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePanel from "./pages/HomePanel";
import OrdersPendingPanel from "./pages/OrdersPendingPanel";
import OrdersCompletedPanel from "./pages/OrdersCompletedPanel";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
            <MenuAppBar />

            <Route exact path="/" component={HomePanel} />
            <Route path="/Orders/pending" component={OrdersPendingPanel} />
            <Route path="/Orders/completed" component={OrdersCompletedPanel} />
            <Route path="/Home" component={HomePanel} />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
