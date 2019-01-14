import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

function PrimaryBar(props) {
  return (
    <AppBar
      position="sticky"
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
          <Button component={Link} to="/">
            home
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
          <Button component={Link} to="/orders/pending">
            orders
          </Button>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

PrimaryBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PrimaryBar;
