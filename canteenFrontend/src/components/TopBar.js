import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppIcon from "@material-ui/icons/Fastfood";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const styles = {
    grow: {
        flexGrow: 1,
    },

    toolbar: {
        height: "72px",
    },
};

class TopBar extends React.Component {
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
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position='sticky' color='primary'>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='Menu'
                        component={Link}
                        to='/'
                    >
                        <AppIcon />
                    </IconButton>

                    <Typography
                        variant='h6'
                        align='right'
                        color='inherit'
                        className={classes.grow}
                    >
                        john
                    </Typography>

                    <div>
                        <IconButton
                            aria-owns={open ? "menu-appbar" : undefined}
                            aria-haspopup='true'
                            onClick={this.handleMenu}
                            color='inherit'
                        >
                            <AccountCircle fontSize='large' />
                        </IconButton>

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
                            <MenuItem onClick={this.handleClose}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(TopBar);
