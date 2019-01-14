import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ButtonAppBar(props) {
  const { classes } = props;
  return (
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
          {/* <Link to='/Orders/pending'>
            <button>
              orders
            </button>
          </Link>*/}
          <Button component={Link} to="/Orders/pending">
            orders
          </Button>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ButtonAppBar;
