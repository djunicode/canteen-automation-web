import React from "react";

import Typography from "@material-ui/core/Typography";
import styles from "./Footer.css";

function Footer({ total, orderCount }) {
    return (
        <div className={styles.footer}>
            <Typography align='right' color='white' variant='h6'>
                <span>TOTAL Rs. {total} </span>
                <span>ORDERS {orderCount}</span>
            </Typography>
        </div>
    );
}

export default Footer;
