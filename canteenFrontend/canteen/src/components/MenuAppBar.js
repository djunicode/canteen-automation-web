import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    // width: `100%`,
    position: 'fixed',
    height: 70,
    backgroundColor:'#0477BD'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

};
class MenuAppBar extends React.Component {
    state = {

      anchorEl: null,
    };

    handleChange = event => {
      this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    render() {
      const { classes } = this.props;
      const {  anchorEl } = this.state;
      const open = Boolean(anchorEl);

      return (
        <div>
        <div className={classes.root}>

          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />{/* logo */}
              </IconButton>
              <Typography variant="h6" align="right" color="inherit" className={classes.grow}>
              john
              </Typography>

                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle fontSize="large" />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >

                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>

                  </Menu>

                </div>

            </Toolbar>
          </AppBar>
        </div>
        </div>
      );
    }
  }

  MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(MenuAppBar);