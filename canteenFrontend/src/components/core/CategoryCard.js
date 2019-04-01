import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import endpoint from "../../util/client";
import axios from "axios";

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
    // 127,0,0,,1:8000/categories/
    const url = endpoint().directory("categories/" + props.id)

    const handleDelete = () => {
        axios.delete(url);
    };

    return (
        <StyledCard>
            <span>{props.name}</span>
            <span
                className='fa fa-times-circle-o icon-cross'
                aria-hidden='true'
                onClick={handleDelete}
            />
        </StyledCard>
    );
}

export default Category;
