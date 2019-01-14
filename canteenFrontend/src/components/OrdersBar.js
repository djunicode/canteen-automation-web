import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RoundSearchBar from "./RoundSearchBar";

function OrdersBar() {
    return (
        <AppBar
            position='sticky'
            style={{
                backgroundColor: "white",
                borderBottom: "3px solid #0477BD",
            }}
        >
            <Toolbar style={{ height: 20 }}>
                <IconButton
                    style={{
                        marginLeft: -12,
                        marginRight: 20,
                    }}
                    color='inherit'
                    aria-label='Menu'
                >
                    <Button component={Link} to='/Orders/pending'>
                        pending
                    </Button>
                </IconButton>
                <IconButton
                    style={{
                        marginLeft: -12,
                        marginRight: 20,
                    }}
                    color='inherit'
                    aria-label='Menu'
                >
                    <Button component={Link} to='/Orders/completed'>
                        completed
                    </Button>
                </IconButton>
                <div style={{ paddingLeft: 700 }}>
                    <RoundSearchBar />
                </div>
            </Toolbar>
        </AppBar>
    );
}

OrdersBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default OrdersBar;
