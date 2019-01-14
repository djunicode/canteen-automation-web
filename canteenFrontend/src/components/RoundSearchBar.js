import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "stretch",
        width: 450,
        backgroundColor: "#DDF3FD",
        border: "3px solid #0477BD",
        borderRadius: 50,
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
};

function RoundSearchBar(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label='Menu'>
                <SearchIcon />
            </IconButton>
            <InputBase className={classes.input} placeholder='Search ' />
            <IconButton className={classes.iconButton} aria-label='Search' />

            <IconButton
                color='primary'
                className={classes.iconButton}
                aria-label='Directions'
            />
        </Paper>
    );
}

RoundSearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoundSearchBar);