import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";

import endpoint from "../util/client";
import axios from "axios";
import { withStyles } from '@material-ui/core';

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

class AddMenuItem extends React.Component {
    state = {
        data: [],
        name: "",
        category: "",
        price: '',
        options: "",
        multiline: "Controlled",
        open: false,
    };

    handleClickOpen = () => {
        const url = endpoint().directory('menu').toString();
        this.setState({ open: true });
      };

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        const url = endpoint().directory('menu').toString();
        axios.post(url, {
        name: this.state.name,
        price: this.state.price,
        options: this.state.options,
        category: this.state.category,
        is_available: false,
        preparation_time: null,
        ingredients: []
        })
        .then(() => this.setState({ open: false }));
      };
    
    componentDidMount = async () => {
        const url = endpoint()
            .directory("menu")
            .toString();
            
        try {
            const response = await axios.get(url);
            console.log(response.data)
            this.setState({
                data: response.data,
            });
        } catch(e) {
            alert(`Couldn't GET /menu/ ERROR ${e}`);
        };
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
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                />
                <TextField
                    id='outlined-textarea'
                    label='Price'
                    placeholder='Price'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                    value={this.state.price}
                    onChange={this.handleChange('price')}
                />
                <TextField
                    id='outlined-textarea'
                    label='Options'
                    placeholder='Options'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                    value={this.state.options}
                    onChange={this.handleChange('options')}
                />
                <TextField
                    id='outlined-textarea'
                    label='Category'
                    placeholder='Category'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                    value={this.state.category}
                    onChange={this.handleChange('category')}
                />
                <Button
                    onClick={this.handleSubmit}
                    onClose={this.handleClose}
                    open={this.state.open}
                    style={{
                        backgroundColor: "#0477BD",
                        textAlign: "center",
                        color: "white",
                        borderRadius: 7,
                        width: 335,
                        left: 8,
                        // right: 25,
                        // bottom: 20,
                    }}
                >
                    ADD ITEM
                </Button>
               
            </form>
        );
    }
}

AddMenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMenuItem);
