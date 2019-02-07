import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <React.Fragment>
                    <TopBar />
                    {/*<PrimaryBar pos='home'/>*/}

                    <Route exact path='/' component={HomePage} />
                    <Route path='/orders' component={OrdersPage} />
                </React.Fragment>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;