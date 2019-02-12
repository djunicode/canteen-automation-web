import React from "react";

import "./SectionHeading.css";

function SectionHeading({ className, children }) {
    const classes = className || "";

    return <div className={classes + " column-heading"}>{children}</div>;
}

export default SectionHeading;
