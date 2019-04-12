import React from "react";
import { Link } from "react-router-dom";

import BarButton from "../core/BarButton";
import BorderAppBar from "../core/BorderAppBar";
import LargeToolbar from "../core/LargeToolbar";
import { withStyles } from "@material-ui/core";

const styles = {
    "pad_zero_left": {
      "paddingLeft": "0",
      "zIndex": "-100"
    },
    "active": {
      "backgroundColor": "#0477BD !important",
      "color": "white !important",
      "zIndex": "3 !important"
    },
    "inactive": {
      "backgroundColor": "#EEEEEE !important",
      "color": "#0477BD !important",
      "zIndex": "2 !important"
    },
    "first_color": {
      "fontSize": "23 !important",
      "textAlign": "center !important",
      "height": "90% !important",
      "width": "20% !important",
      "margin": "0 !important",
      "float": "left !important",
      "borderRadius": "0 !important",
      "clipPath": "polygon(10% 0%, 90% 0, 100% 100%, 0% 100%) !important",
      "position": "absolute !important",
      "bottom": "0 !important"
    },
    "first": {
      "fontSize": "23 !important",
      "textAlign": "center !important",
      "height": "90% !important",
      "width": "20% !important",
      "margin": "0 !important",
      "float": "left !important",
      "borderRadius": "0 !important",
      "clipPath": "polygon(10% 0%, 90% 0, 100% 100%, 0% 100%) !important",
      "position": "absolute !important",
      "bottom": "0 !important"
    },
    "second": {
      "fontSize": "23 !important",
      "outline": "solid 3px #9E9E9E !important",
      "height": "90% !important",
      "width": "20% !important",
      "float": "left !important",
      "margin": "0 !important",
      "borderRadius": "0 !important",
      "clipPath": "polygon(10% 0%, 90% 0, 100% 100%, 0% 100%) !important",
      "position": "absolute !important",
      "bottom": "0 !important",
      "left": "19.25% !important"
    },
    "second_color": {
      "fontSize": "23 !important",
      "outline": "solid 3px #9E9E9E !important",
      "height": "90% !important",
      "width": "20% !important",
      "float": "left !important",
      "margin": "0 !important",
      "borderRadius": "0 !important",
      "clipPath": "polygon(10% 0%, 90% 0, 100% 100%, 0% 100%) !important",
      "position": "absolute !important",
      "bottom": "0 !important",
      "left": "19.25% !important"
    }
  };

function NavBar({ pos, classes }) {
    let homeClasses = [classes.first];
    let ordersClasses = [classes.second];
    if (pos === "home") {
        homeClasses.push([classes.active]);
        ordersClasses.push([classes.inactive]);
    } else {
        homeClasses.push([classes.inactive]);
        ordersClasses.push([classes.active]);
    }

    return (
        <BorderAppBar 
            position='relative'
            color='#ffffff'
        >
            <LargeToolbar className='pad-zero-left'>
                <BarButton
                    className={homeClasses.join(" ")}
                    component={Link}
                    to='/'
                >
                    Home
                </BarButton>
                <BarButton
                    className={ordersClasses.join(" ")}
                    component={Link}
                    to='/orders/pending'
                >
                    Orders
                </BarButton>
            </LargeToolbar>
        </BorderAppBar>
    );
}

export default withStyles(styles)(NavBar);
