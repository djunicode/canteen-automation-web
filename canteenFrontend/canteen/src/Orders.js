
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Pending from './PendingOrders';
import Completed from './CompletedOrders';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props}/>;
}

const styles = theme => ({
  root: {
   // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },

  grow: {
    flexGrow: 1,
  },
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.blue, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.blue, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

const stylesbar={
	nav:{
	 background: 'white',
    color:'#0477BD',
	  marginTop: 0,
	  marginLeft:0,
	  marginRight:0,
	  padding:0,

}

};

class NavTabs extends React.Component {
  state = {
    value: 0,

  };

  handleChange = (event, value) => {
    this.setState({ value ,color:'black'});
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;


    return (
      <NoSsr>
        <div className={classes.root}  >
          <AppBar position="static" style={stylesbar.nav} >
          <Toolbar style={{marginLeft:0}}>
           <Tabs value={value} onChange={this.handleChange} >
              <LinkTab label="Pending" href="page1" />
              <LinkTab label="Completed" href="page2" />
            </Tabs>
          <div className={classes.grow} />
         	<div className={classes.search} style={{ background: '#0477BD',color:'white',marginRight:0}}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="SEARCH"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          </Toolbar>

          </AppBar>
          {value === 0 && <TabContainer ><Pending/></TabContainer>}
          {value === 1 && <TabContainer ><Completed/></TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
