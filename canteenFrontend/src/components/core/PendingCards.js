import React from 'react';
import styles from './styles'
import Typography from "@material-ui/core/Typography";
function PendingCard (props){
    return(
        <div style={styles.box}>
        <div style={styles.indicator}></div>
            <div style={styles.content}>
                <div style={styles.order}></div>
                    <div style={styles.item}>
                        <div style={styles.attribute1}><Typography><strong>ITEMS</strong></Typography></div>
                        <div style={styles.attribute2}><Typography><strong>QTY</strong></Typography></div>
                        <div style={styles.attribute1}><Typography><strong>{props.Name}</strong></Typography></div>
                        <div style={styles.attribute2}><Typography><strong>{props.Quantity}</strong></Typography></div>
                    </div>
                        <div style={styles.tick}></div>
            </div>
    </div>
    );
}

export default PendingCard;