import React from "react";

import { withStyles } from "@material-ui/core/styles";

const styles = {
    footer: {
        gridArea: "footer",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "50",
        backgroundColor: "#0477BD",
    },
    footer___span: {
        margin: "0 45px 0 45px",
        color: "white",
        fontWeight: "bold",
    },
};

function Footer({ total, orderCount, classes }) {
    return (
        <div className={classes.footer}>
            <span>TOTAL Rs. {total} </span>
            <span>ORDERS {orderCount}</span>
        </div>
    );
}

export default withStyles(styles)(Footer);
