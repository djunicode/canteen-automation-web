
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Order from './Orders';

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
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const stylesnav={
    background: 'white',
    color:'#0477BD',
    marginTop:65
};

class NavTabs extends React.Component {
  state = {
    value: 0,
    
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    
   
   

    return (
      <NoSsr>
        <div className={classes.root} >
          <AppBar position="static" style={stylesnav}>
            <Tabs value={value} onChange={this.handleChange}  >
              <LinkTab label="Home" href="page1" />
              <LinkTab label="Orders" href="page2" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Home/></TabContainer>}
          {value === 1 && <TabContainer><Order/></TabContainer>}
        </div>

      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);