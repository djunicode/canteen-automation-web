import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import AddIcon from "@material-ui/icons/Add";

import endpoint from "../util/client";
import axios from "axios";
import { withStyles } from '@material-ui/core';

const styles =  {
  "container": {
    "display": "flex",
    "flexWrap": "wrap"
  },
  "textField": {
    "marginLeft": "8px",
    "marginRight": "8px",
    "width": "350px"
  },
  "icon_plus": {
    float: "right",
    fontSize: 30,
    color: "#019BE5",
    padding: 10,
    top: "0%",
    transform: "translateY(-9%)",
},
};

class AddCategory extends React.Component {
  state = {
    category: '',
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleChange = (e) => this.setState({
    category: e.target.value,
  });

  handleSubmit = () => {
    const url = endpoint().directory('categories').toString();
    axios.post(url, {
      name: this.state.category,
    })
    .then(() => this.setState({ open: false }))
    .then(() => this.props.finishcb());
  };

  render() {
    return (
      <div>
        
        <AddIcon variant="outlined" color="primary" onClick={this.handleClickOpen}  style={styles.icon_plus}
                 className='fa fa-plus-circle'
                />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          
          <DialogContent>
            <DialogContentText> </DialogContentText>
            <form className='container' noValidate autoComplete='off'>
                <TextField
                    id='outlined-textarea'
                    label='Category Name'
                    placeholder='Category'
                    className='textField'
                    margin='normal'
                    variant='outlined'
                    value={this.state.category}
                    onChange={this.handleChange}
                />
              </form>
        
          </DialogContent>
          <DialogActions>
            <Button
               onClick={this.handleSubmit}
                   style={{
                       backgroundColor: "#0477BD",
                        textAlign: "center",
                        color: "white",
                        borderRadius: 7,
                        width: 335,
                        left: 0,
                        //  right: 25,
                         bottom: 20,
                          }}
              >
                 ADD CATEGORY
               </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddCategory);
