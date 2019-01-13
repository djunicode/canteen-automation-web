import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

import Orders from "./Orders";

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div style={{ flexGrow: 1, marginTop: 50, height: 20 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "3px solid #0477BD"
        }}
      >
        <Toolbar>
          <IconButton
            style={{
              marginLeft: -12,
              marginRight: 20
            }}
            color="inherit"
            aria-label="Menu"
          >
            <Button component={Link} to="/Home">
              Home
            </Button>
          </IconButton>
          <IconButton
            style={{
              marginLeft: -12,
              marginRight: 20
            }}
            color="inherit"
            aria-label="Menu"
          >
            <Button component={Link} to="/Orders">
              Orders
            </Button>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ButtonAppBar;
