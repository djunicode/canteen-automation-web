import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import "./CategoryCard.css";

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

// -----

function Category(props) {
    return (
        <StyledCard>
            <span>{props.name}</span>
            <span
                className='fa fa-times-circle-o icon-cross'
                aria-hidden='true'
            />
        </StyledCard>
    );
}

export default Category;
