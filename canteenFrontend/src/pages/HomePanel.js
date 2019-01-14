import React from "react";
import MenuAppBar from "../components/MenuAppBar";
import ButtonAppBar from "../components/ButtonAppBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OrdersPendingPanel from "./OrdersPendingPanel";
import OrdersCompletedPanel from './OrdersCompletedPanel';
import PermanentDrawerLeft from "../components/PermanentDrawerLeft";

function Home() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <PermanentDrawerLeft />

      <Route path="/Orders/pending" component={OrdersPendingPanel} />
      <Route path="/Orders/completed" component={OrdersCompletedPanel} />
    </React.Fragment>
  );
}
export default Home;
