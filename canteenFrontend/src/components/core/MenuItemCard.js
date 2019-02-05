import React from 'react';
// import styles from './Style_ItemsCard'
import styles from './styles'
import Typography from "@material-ui/core/Typography";
import { Divider } from '@material-ui/core';

function MenuItemCard(props) {
    return (
        <div>
            <br />
            <div style={styles.box1}>
                <div style={styles.item1}>
                    <div style={styles.left_con}>
                        <div style={styles.attribute3}>NAME</div>
                        <div style={styles.attribute4}>{props.Name}</div>
                        <div style={styles.attribute3}>INGREDIENTS</div>
                        <div style={styles.attribute4}>{props.Ing}</div>
                    </div>
                    <div style={styles.right_con}>
                        <div style={styles.attribute5}>PRICE</div>
                        <div style={styles.attribute6}>{props.Price}</div>
                    </div>
                </div>
                <div style={styles.wrap}>
                    <div style={styles.icon_tick} className="fa fa-check-circle fa-2x" aria-hidden="true" ></div>
                    {/* <div style={styles.icon_trash} className="fa fa-pencil-square fa-2x" aria-hidden="true" ></div> */}
                    <div style={styles.icon_trash} className="fa fa-trash fa-2x" aria-hidden="true" ></div>

                    <div style={styles.edit_button}><button>EDIT</button></div>
                </div>
            </div>
        </div>
    );
}

export default MenuItemCard;