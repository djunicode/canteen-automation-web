import React from "react";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import OutlinedTextFields from "./OutlinedTextFields";
import Button from "@material-ui/core/Button";
import RoundSearchBar from "./RoundSearchBar";
import PendingCards from "./core/ItemCard";
import { Divider } from "@material-ui/core";
import PendingDrawer from "./core/PendingDrawer";
import ItemCard from "./core/ItemCard";
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
    render() {
        return (
            <div>
                <div
                    style={{
                        float: "left",
                        width: "30%",
                        height: 581,
                        backgroundColor: "#E9E9E9",
                        overflow: 'auto',
                        borderRight: "3px solid #D0D8DD",
                    }}
                >
                    <Typography
                        variant='h6'
                        align='center'
                        color='#607D8B'
                        padding='50px'
                    >
                        PENDING ORDERS
                    </Typography>
                    <Divider />
                    <PendingDrawer />
                </div>
                <div
                    style={{
                        width: "100%",
                        height: 70,
                        backgroundColor: "#FFFFFF",
                        borderBottom: "3px solid #D0D8DD",
                        textAlign: "center",
                    }}
                >
                    <div style={{ display: "inline-block", marginTop: 10 }}>
                        <RoundSearchBar />
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            width: "20%",
                            float: "left",
                            backgroundColor: "white",
                            height: 455,
                            borderBottom: "3px solid #D0D8DD",
                            borderRight: "3px solid #D0D8DD",
                        }}
                    >
                        left content
                    </div>
                    <div
                        style={{
                            float: "right",
                            width: "49.6%",
                            backgroundColor: "#DDF3FD",
                            height: 455,
                            borderBottom: "3px solid #D0D8DD",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: 65,
                                backgroundColor: "#FFFFFF",
                            }}
                        >
                            <div
                                style={{
                                    float: "left",
                                    width: "80%",
                                    height: 57,
                                }}
                            >
                                <h2 style={{ textAlign: "center" }}>ITEMS</h2>
                            </div>
                            <div
                                style={{
                                    float: "right",
                                    width: "20%",
                                    height: 57,
                                }}
                            >
                                <button
                                    onClick={this.handleClickOpen}
                                    style={{
                                        marginTop: 18,
                                        borderRadius: 20,
                                        backgroundColor: "white",
                                        color: "#0477BD",
                                        borderColor: "#0477BD",
                                        padding: 7,
                                        width: 110,
                                        cursor: "pointer",
                                        textAlign: "center",
                                    }}
                                >
                                    <strong>ADD ITEM</strong>
                                </button>

                                <Dialog
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby='form-dialog-title'
                                >
                                    <div style={{ width: 400 }}>
                                        <DialogContent>
                                            <OutlinedTextFields />
                                        </DialogContent>
                                    </div>
                                    <DialogActions>
                                        <Button
                                            onClick={this.handleClose}
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
                        </div>
                        <div
                            style={{ height: 390, backgroundColor: "#DDF3FD" ,overflow:'auto'}}
                        >
                            {/*cards*/}
                            <ItemCard Name="Masala Dosa" Ing="Masala, Chutney, Sambhar, Batter" Price="₹49"/>
                            <ItemCard Name="Pav Bhaji" Ing="Pav, Potatoes, Tomatoes" Price="₹60"/>
                            <ItemCard Name="Sada Dosa" Ing="Batter, Chutney, Sambhar" Price="₹59"/>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: "100%",
                        height: 508.6,
                        backgroundColor: "#0477BD",
                    }}
                >
                    <Typography align='right' color='default' variant='h6'>
                        TOTAL Rs. 12,500
                        <span style={{ paddingLeft: 40, paddingRight: 40 }}>
                            ORDERS 150
                        </span>
                    </Typography>
                </div>
            </div>
        );
    }
}
export default PermanentDrawerLeft;