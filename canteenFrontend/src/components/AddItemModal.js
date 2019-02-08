import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import OutlinedTextFields from "./OutlinedTextFields";
import Button from "@material-ui/core/Button";
import "./core/style.css";

const AddItemModal=({handleClose,open,children}) => {
    const showHideClassName = open ? 'display-block' : 'display-none';
    return(
        <div className={showHideClassName}>
                                {children}
                                        <Dialog
                                            //open={this.state.open}
                                            //onClose={this.handleClose}
                                            aria-labelledby='form-dialog-title'
                                        >
                                            <div style={{ width: 400 }}>
                                                <DialogContent>
                                                    <OutlinedTextFields />
                                                </DialogContent>
                                            </div>
                                            <DialogActions>
                                                <Button
                                                    onClick={handleClose}
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
                                                    ADD ITEM
                                                </Button>
                                            </DialogActions>
                                            </Dialog>

        </div>

    );
};
  
export default AddItemModal;