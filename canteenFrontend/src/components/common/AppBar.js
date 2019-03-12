import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppIcon from "@material-ui/icons/Fastfood";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import "./AppBar.css";

class CustomAppBar extends React.Component {
    state = {
        anchorEl: null,
    };

    handleChange = (event) => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position='relative' className='appbar'>
                <Toolbar className='topToolbar'>
                    <div>
                        <IconButton
                            className='menuButton'
                            color='inherit'
                            aria-label='Menu'
                            component={Link}
                            to='/'
                        >
                            <AppIcon />
                        </IconButton>
                    </div>

                    <div className='authTools'>
                        <Typography variant='h6' align='right' color='inherit'>
                            John
                        </Typography>

                        <IconButton color='inherit'>
                            <AccountCircle fontSize='large' />
                        </IconButton>

                        <IconButton
                            aria-owns={open ? "menu-appbar" : undefined}
                            aria-haspopup='true'
                            onClick={this.handleMenu}
                            color='inherit'
                        >
                            <ArrowDropDown />
                        </IconButton>
                    </div>

                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default CustomAppBar;
