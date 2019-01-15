import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import RoundSearchBar from "./RoundSearchBar";
import BarButton from "./core/BarButton";
import BorderAppBar from "./core/BorderAppBar";
import LargeToolbar from "./core/LargeToolbar";

const styles = {
    ordersToolbar: {
        justifyContent: "space-between",
    },
};

function OrdersBar({ classes }) {
    return (
        <BorderAppBar position='sticky' color='secondary'>
            <LargeToolbar className={classes.ordersToolbar}>
                <div>
                    <BarButton component={Link} to='/orders/pending'>
                        Pending
                    </BarButton>
                    <BarButton component={Link} to='/orders/completed'>
                        Completed
                    </BarButton>
                </div>
                <span>
                    <RoundSearchBar />
                </span>
            </LargeToolbar>
        </BorderAppBar>
    );
}

export default withStyles(styles)(OrdersBar);
