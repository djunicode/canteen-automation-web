import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PermanentDrawerLeft from "../components/PermanentDrawerLeft";

function Home() {
  return (
    <React.Fragment>
        <PermanentDrawerLeft />
    </React.Fragment>
  );
}
export default Home;
