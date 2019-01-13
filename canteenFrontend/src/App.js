import React from "react";
import MenuAppBar from "./components/MenuAppBar";
import ButtonAppBar from "./components/ButtonAppBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
//import Orders from "./components/Orders";
import Pending from "./components/Pending";
import Completed from "./components/Completed";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Orders/pending" component={Pending} />
          <Route path="/Orders/completed" component={Completed} />
          <Route path="/Home" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
