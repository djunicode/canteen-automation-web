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
        lineHeight: 20,
        height: "20px",
        padding: "6px 0 6px 0",
    },
})(InputBase);

const styles = {
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 450,
        backgroundColor: "#DDF3FD",
        border: "3px solid #0477BD",
        borderRadius: 50,
    },
};

function RoundSearchBar(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label='Menu'>
                <SearchIcon />
            </IconButton>
            <RoundInputBase placeholder='Search' onChange={props.onChange} />
        </Paper>
    );
}

export default withStyles(styles)(RoundSearchBar);
