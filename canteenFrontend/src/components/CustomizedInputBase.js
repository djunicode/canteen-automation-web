import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const styles = {
  root: {
    
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'stretch',
    width: 450,
    backgroundColor:'#DDF3FD',
    border:'3px solid #0477BD',
    borderRadius:50,

  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
 
};

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <IconButton className={classes.iconButton} aria-label="Menu">
        
        <SearchIcon />
      </IconButton>
      <InputBase className={classes.input} placeholder="Search " />
      <IconButton className={classes.iconButton} aria-label="Search">
        
      </IconButton>
      
      <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
      
      </IconButton>
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);
