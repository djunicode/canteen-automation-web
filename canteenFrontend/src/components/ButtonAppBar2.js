import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import Orders from './Orders';
import CustomizedInputBase from "./CustomizedInputBase";
function ButtonAppBar2(props) {
  const { classes } = props;
  return (
    <div style={{ flexGrow: 1, marginTop: 48, height: 20 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", borderBottom: "3px solid #0477BD" }}
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
            <Button component={Link} to="/Orders/pending">
              pending
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
            <Button component={Link} to="/Orders/completed">
              completed
            </Button>
          </IconButton>
          <div style={{ paddingLeft: 700 }}>
            <CustomizedInputBase />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ButtonAppBar2;
