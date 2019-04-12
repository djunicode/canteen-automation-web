import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../components/core/styles";

import RoundSearchBar from "../components/core/RoundSearchBar";
import BarButton from "../components/core/BarButton";
import BorderAppBar from "../components/core/BorderAppBar";
import LargeToolbar from "../components/core/LargeToolbar";

function OrdersNavBar(props) {
    let style1 = styles.firstColorsm;
    let style2 = styles.secondsm;
    if (props.pos === "completed") {
        style1 = styles.firstsm;
        style2 = styles.secondColorsm;
    }

    return (
        <BorderAppBar
            position='static'
            color='#ffffff'
            style={styles.padLeftZero}
        >
            <LargeToolbar style={styles.ordersToolbar}>
                <div>
                    <BarButton
                        style={style1}
                        component={Link}
                        to='/orders/pending'
                    >
                        Pending
                    </BarButton>
                    <BarButton
                        style={style2}
                        component={Link}
                        to='/orders/completed'
                    >
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

export default withStyles(styles)(OrdersNavBar);
