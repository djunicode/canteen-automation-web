import React from "react";
import { Link } from "react-router-dom";
import styles  from "./core/styles";
import BarButton from "./core/BarButton";
import BorderAppBar from "./core/BorderAppBar";
import LargeToolbar from "./core/LargeToolbar";

function PrimaryBar(props) {
    
    let style1 = styles.firstColor
    let style2 = styles.second
    if (props.pos === "home") {
        style1 = styles.first
        style2 = styles.secondColor

    }

    return (
        <BorderAppBar position='sticky' color='secondary'>
            <LargeToolbar style={styles.padLeftZero} >
                <BarButton
                    style={style1}
                    component={Link} to='/'
                    >
                    Home
                </BarButton>
                <BarButton
                    style={style2}
                    component={Link} to='/orders/pending'
                    >
                    Orders
                </BarButton>
            </LargeToolbar>
        </BorderAppBar>
    );
}

export default PrimaryBar;
