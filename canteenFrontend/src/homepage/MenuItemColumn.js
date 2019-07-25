import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import SectionHeading from "../components/SectionHeading";
import MenuItem from "./MenuItemCard";
import AddMenuItem from "./AddMenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import axios from "axios";
import OutlinedTextField from "../components/OutlinedTextField";
import endpoint from "../util/client";

import "../components/Cards.css";

const StyledButton = withStyles({
    root: {
        color: "#0477BD",
        backgroundColor: "white",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        
        padding: "8px 32px 8px 32px",
        border: "solid 3px",
        borderRadius: "26px",
        
        position: "absolute",
        right: "16px",
        left: "auto",
    },
})(Button);

const styles = {
    "MenuItemColumn": {
      "gridArea": "menu",
      "backgroundColor": "#DDF3FD",
      "borderBottom": "3px solid #D0D8DD",
      "display": "flex",
      "flexDirection": "column"
    },
    "MenuItemColumn____column_heading": {
      "display": "flex",
      "justifyContent": "center"
    }
};

class MenuItemColumn extends React.Component {
    state = {
        data: [],
        open:false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    
    

    componentDidMount = async () => {
        const url = endpoint()
            .directory("menu")
            .toString();
            
        try {
            const response = await axios.get(url);
            this.setState({
                data: response.data,
            });
        } catch(e) {
            alert(`Couldn't GET /menu/ ERROR ${e}`);
        };
    };

    render = () => {
        const { classes } = this.props;

        const menuItemsList = this.state.data.map((e, i) => (
            <MenuItem 
                name={e.name.toUpperCase()}
                price={e.price}
                category={e.category}
                key={i} />
        ));

        return (
            <div className={classes.MenuItemColumn}>
                <SectionHeading>
                    Items
                    <StyledButton disableRipple onClick={this.handleClickOpen}>Add Item</StyledButton>
                                <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby='form-dialog-title'
                                    >
                                        <div style={{ width: 400 }}>
                                            <DialogContent>
                                                <AddMenuItem />
                                            </DialogContent>
                                        </div>
                                        {/* <DialogActions>
                                            <Button
                                                onClick={this.handleSubmit}
                                                onClose={this.handleClose}
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
                                        </DialogActions> */}
                                    </Dialog>
                </SectionHeading>
                <div className="cards-section">
                    {menuItemsList}
                </div>
            </div>
        );
    };
}

export default withStyles(styles)(MenuItemColumn);
