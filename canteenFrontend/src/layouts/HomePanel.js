import React from "react";
import MenuAppBar from "../components/MenuAppBar";
import ButtonAppBar from "../components/ButtonAppBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OrdersPendingPanel from "../layouts/OrdersPendingPanel";
import OrdersCompletedPanel from "../layouts/OrdersCompletedPanel";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft";

function Home() {
  return (
    <React.Fragment>
      <div style={{ width: "100%", height: 140 }}>
        <MenuAppBar />
        <br />
        <ButtonAppBar />
      </div>
      <PermanentDrawerLeft />

      <Route path="/Orders/pending" component={OrdersPendingPanel} />
      <Route path="/Orders/completed" component={OrdersCompletedPanel} />
    </React.Fragment>
  );
}
export default Home;
