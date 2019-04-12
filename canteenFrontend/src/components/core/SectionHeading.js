import React from "react";

import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    "column_heading": {
      "background": "white",
      "color": "#607D8B",
      "textTransform": "uppercase",
      "fontSize": "24px",
      "padding": "16px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center"
    }
};

function SectionHeading({ className, children, classes }) {

    return <div className={(className || "") + " " + classes.column_heading}>{children}</div>;
}

export default withStyles(styles)(SectionHeading);
