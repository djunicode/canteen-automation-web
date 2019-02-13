import React from "react";

import styles from "./styles";
import Typography from "@material-ui/core/Typography";

class OrderCard extends React.Component {
    state = {
        color: "#FFD73F",
        pending: this.props.pendingStatus,
    };

    handleColorChange = () => {
        if (this.props.editable) {
            this.setState({ pending: !this.state.pending });
        }
    };

    render() {
        let varcolor = this.state.pending ? "#FFD73F" : "#00C952";
        const style_indicator = {
            height: "100%",
            width: "3.5%",
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            backgroundColor: varcolor,
            float: "left",
        };
        const style_tick = {
            width: 30,
            height: 30,
            marginTop: 17,
            color: varcolor,
            marginLeft: 1,
            cursor: "pointer",
        };

        return (
            <div style={styles.box}>
                <div style={style_indicator} />
                <div style={styles.content}>
                    <div style={styles.order}>order no.</div>
                    <div style={styles.item}>
                        <div style={styles.attribute1}>
                            <Typography>
                                <strong>ITEMS</strong>
                            </Typography>
                        </div>
                        <div style={styles.attribute2}>
                            <Typography>
                                <strong>QTY</strong>
                            </Typography>
                        </div>
                        <div style={styles.attribute1}>
                            <Typography>
                                <strong>{this.props.name}</strong>
                            </Typography>
                        </div>
                        <div style={styles.attribute2}>
                            <Typography>
                                <strong>{this.props.quantity}</strong>
                            </Typography>
                        </div>
                    </div>
                    <div style={styles.tick_box}>
                        <div
                            onClick={this.handleColorChange}
                            style={style_tick}
                            className='fa fa-check-circle-o fa-2x'
                            aria-hidden='true'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderCard;
