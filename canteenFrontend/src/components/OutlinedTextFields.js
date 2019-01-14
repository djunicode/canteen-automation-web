import React from "react";
import PropTypes from "prop-types";
//import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
});

class OutlinedTextFields extends React.Component {
    state = {
        multiline: "Controlled",
    };

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete='off'>
                <TextField
                    id='outlined-textarea'
                    label='Name'
                    placeholder='Name'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                />
                <TextField
                    id='outlined-textarea'
                    label='Ingredients'
                    placeholder='Ingredients'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                />
                <TextField
                    id='outlined-textarea'
                    label='Price'
                    placeholder='Price'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                />
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
