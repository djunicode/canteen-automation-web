import React from "react";

import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import endpoint from "../../util/client";
import axios from "axios";

const StyledCard = withStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        borderRadius: 0,
        padding: "0 16px 0 32px",
        height: "72px",
        color: "#9E9E9E",
        fontSize: "20px",
    },
})(Card);

const styles = {
    "icon_cross": {
      "fontSize": "32px",
      "color": "#E8453E",
      "padding": "10px",
      "margin": "0"
    }
};

// -----

function Category(props) {
    const { classes } = props;

    // 127,0,0,,1:8000/categories/
    const url = endpoint().directory("categories/" + props.id)

    const handleDelete = () => {
        axios.delete(url);
    };

    return (
        <StyledCard>
            <span>{props.name}</span>
            <span
                className={classnames('fa', 'fa-times-circle-o', classes.icon_cross)}
                aria-hidden='true'
                onClick={handleDelete}
            />
        </StyledCard>
    );
}

export default withStyles(styles)(Category);
