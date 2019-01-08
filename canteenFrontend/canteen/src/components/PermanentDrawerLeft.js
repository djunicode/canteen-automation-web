import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import OutlinedTextFields from './OutlinedTextFields';

const drawerWidth = 420;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    marginTop: 71,
    backgroundColor:'white'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: 70,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit *3 ,
  },



});

class PermanentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render()
  {
  const { classes } = this.props;

  return (
    <div>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
         <Typography variant="h6">
           search back
         </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <div style={{position:'absolute',width:420,height:680,backgroundColor:'#F3F3F3',borderRight:'3px solid #D0D8DD'}}><h3 style={{textAlign:'center'}}>PENDING ORDERS</h3></div>
        
      
     
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{height:530,width:'104.4%', marginTop:49, marginLeft:-25}}>
          <div style={{
            width:'30%', float:'left',backgroundColor: 'white',
            height:530,
            borderBottom:'3px solid #D0D8DD',borderRight:'3px solid #D0D8DD',
            }}>
            #left content in there
</div>

          <div style={{width:'70%', float:'right',
          backgroundColor:'#DDF3FD',height:530
          
          }}>
          <div style={{width:'100%',height:70,backgroundColor:'white',
                        borderRight:'3px solid #D0D8DD'
        }}>
          <div style={{float:'left',width:'80%',height:35}}>
               <h2 style={{textAlign:'center'}}>ITEMS</h2>
          </div>
            <div style={{float:'right',width:'20%',height:35}}>
             <button onClick={this.handleClickOpen}
             
             style={{textAlign:'right',marginTop:18,borderRadius:20
             ,backgroundColor:'white',color:'#0477BD',borderColor:'#0477BD',
             padding:7,
             width:110,
             cursor:'pointer',
             textAlign:'center',
            }}>
            <strong>ADD ITEM</strong>
            </button>
            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
       >
          <div style={{width:400}}>
          <DialogContent>
          <OutlinedTextFields/>
          </DialogContent>
          </div>
          <DialogActions>
            
            <Button onClick={this.handleClose}
            style={{backgroundColor:'#0477BD',textAlign:'center',color:'white',
                    borderRadius:7, width:335,right:25,bottom:20,
          }}
            >
              ADD ITEM
            </Button>
          </DialogActions>
        </Dialog>
           </div>
           </div>
           <Divider/>
          
            
</div>

         </div>
      </main>
    </div>
    </div>
      );
}
}
PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);