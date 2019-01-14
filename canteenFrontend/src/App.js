import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

import MenuAppBar from "./components/MenuAppBar";
import ButtonAppBar from "./components/ButtonAppBar";
import HomePanel from "./pages/HomePanel";
import OrdersPendingPanel from "./pages/OrdersPendingPanel";
import OrdersCompletedPanel from "./pages/OrdersCompletedPanel";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <React.Fragment>
            <MenuAppBar />

            <Route exact path="/" component={HomePanel} />
            <Route path="/Orders/pending" component={OrdersPendingPanel} />
            <Route path="/Orders/completed" component={OrdersCompletedPanel} />
            <Route path="/Home" component={HomePanel} />
        </React.Fragment>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
