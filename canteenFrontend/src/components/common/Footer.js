import React from "react";

import Typography from "@material-ui/core/Typography";
import "./Footer.css";

function Footer({ total, orderCount }) {
    return (
        <div className='footer'>
            <span>TOTAL Rs. {total} </span>
            <span>ORDERS {orderCount}</span>
        </div>
    );
}

export default Footer;
