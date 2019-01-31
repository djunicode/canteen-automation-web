import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './styles';
import { ButtonBase } from '@material-ui/core';
function Category(){
    return(
        <div>
            {/* <ButtonBase> */}
                <Card style={styles.sub_category}>
                        <div style={styles.item_category}>Category 1</div>
                        <a style={styles.icon_cross} className="fa fa-times-circle-o" aria-hidden="true" />
                </Card>
            {/* </ButtonBase> */}
        </div>
    );

}
export default Category;