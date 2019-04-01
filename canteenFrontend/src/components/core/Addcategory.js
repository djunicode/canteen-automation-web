import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles';
import AddIcon from "@material-ui/icons/Add";

import endpoint from "../../util/client";
import axios from "axios";

import './Addcategory.css';

export default class Addcategory extends React.Component {
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
    .then(() => this.setState({ open: false }));
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
                         right: 25,
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