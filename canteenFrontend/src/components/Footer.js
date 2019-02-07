import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    footer: {
        width: "100%",
        height: 50,
        backgroundColor: theme.palette.primary.main,
    }
});

function Footer({ classes, total, orderCount }) {
    return (
        <div className={classes.footer}>
            <Typography align='right' color='white' variant='h6'>
                <span>TOTAL Rs. {total}     </span><span>ORDERS {orderCount}</span>
            </Typography>
        </div>
    );
}

export default withStyles(styles)(Footer);
