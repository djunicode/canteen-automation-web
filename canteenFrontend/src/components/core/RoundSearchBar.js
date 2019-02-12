import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

// The text was off by 1 pixel and it was bugging me.
// Sorry I have OCD.
const RoundInputBase = withStyles({
    root: {
        lineHeight: "20px",
        padding: "6px 0 6px 0",
    },
})(InputBase);

const StyledPaper = withStyles({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 450,
        backgroundColor: "#DDF3FD",
        border: "3px solid #0477BD",
        borderRadius: 50,
    },
})(Paper);

const StyledSearchIcon = withStyles({
    root: {
        color: "#8FC7E6",
    },
})(SearchIcon);

function RoundSearchBar(props) {
    return (
        <StyledPaper elevation={1}>
            <IconButton aria-label='Menu'>
                <StyledSearchIcon />
            </IconButton>
            <RoundInputBase placeholder='Search' onChange={props.onChange} />
        </StyledPaper>
    );
}

export default RoundSearchBar;
