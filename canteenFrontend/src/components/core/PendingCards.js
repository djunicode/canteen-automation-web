import React from 'react';
import styles from './styles'
import Typography from "@material-ui/core/Typography";

function PendingCard(props) {
    const style_indicator={
        height: "100%",
        width: "3.5%",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: props.Color,
        float: "left",
    };

    const style_tick={
        width:30,
        height:30,
        marginTop:17,
        color:props.Color,
        marginLeft:1,
        cursor:'pointer',
    };

    return(
        <div style={styles.box}>
        <div style={style_indicator}></div>
            <div style={styles.content}>
                <div style={styles.order}>order no.</div>
                    <div style={styles.item}>
                        <div style={styles.attribute1}><Typography><strong>ITEMS</strong></Typography></div>
                        <div style={styles.attribute2}><Typography><strong>QTY</strong></Typography></div>
                        <div style={styles.attribute1}><Typography><strong>{props.Name}</strong></Typography></div>
                        <div style={styles.attribute2}><Typography><strong>{props.Quantity}</strong></Typography></div>
                    </div>
                        <div style={styles.tick_box}>
                            <div style={style_tick} className="fa fa-check-circle-o fa-2x" aria-hidden="true"></div>
                        </div>
            </div>
    </div>
    );
}

export default PendingCard;