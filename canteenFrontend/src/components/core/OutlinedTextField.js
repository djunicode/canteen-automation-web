import React from "react";

import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles/";

import "./OutlinedTextField.css";

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

class OutlinedTextField extends React.Component {
    state = {
        multiline: "Controlled",
    };

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <form className='container' noValidate autoComplete='off'>
                <TextField
                    id='outlined-textarea'
                    label='Name'
                    placeholder='Name'
                    multiline
                    className='textField'
                    margin='normal'
                    variant='outlined'
                />
                <TextField
                    id='outlined-textarea'
                    label='Ingredients'
                    placeholder='Ingredients'
                    multiline
                    className='textField'
                    margin='normal'
                    variant='outlined'
                />
                <TextField
                    id='outlined-textarea'
                    label='Price'
                    placeholder='Price'
                    multiline
                    className='textField'
                    margin='normal'
                    variant='outlined'
                />
            </form>
        );
    }
}

OutlinedTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextField);
