import React from 'react';
// import styles from './Style_ItemsCard'

import styles from './styles'
import Typography from "@material-ui/core/Typography";
import { Divider } from '@material-ui/core';
function ItemCard(props) {
    return (
        <div>
            <br />
            <div style={styles.box1}>
                <div style={styles.item1}>
                    <br />
                    <div style={styles.attribute3}>NAME <input style={styles.input} placeholder={props.Name}></input></div>
                    <div style={styles.attribute5}>INGREDIENTS <input style={styles.input} placeholder={props.Ing}></input></div>
                    <div style={styles.attribute4}>Price <input style={styles.input2} placeholder={props.Price}></input></div>
                </div>
                <a style={styles.icon_trash} className="fa fa-trash fa-2x" aria-hidden="true"></a>
                <a style={styles.icon_tick} className="fa fa-check-circle fa-2x" aria-hidden="true"></a>
            </div>
        </div>
    );
}

export default ItemCard;