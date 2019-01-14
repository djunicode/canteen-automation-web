import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

import TopBar from "./components/TopBar";
import PrimaryBar from "./components/PrimaryBar";
import HomePage from "./pages/HomePage";
import OrdersPendingPanel from "./pages/OrdersPendingPanel";
import OrdersCompletedPanel from "./pages/OrdersCompletedPanel";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <React.Fragment>
            <TopBar />
            <PrimaryBar />

            <Route exact path="/" component={HomePage} />
            <Route path="/orders/pending" component={OrdersPendingPanel} />
            <Route path="/orders/completed" component={OrdersCompletedPanel} />
        </React.Fragment>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
