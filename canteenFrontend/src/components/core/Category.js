import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    sub_category:{
        borderRadius:0,
        height:55,
        paddingLeft:18,
        paddingRight:10,
        
    },
    item_category:{
        fontSize:20,
        color:'#607D8B',
        paddingTop:10,
        paddingLeft:5
   },
   icon_cross:{
    fontSize:24,
    color:'#E8453E',
    float:'right',
    padding:10,
    transform: "translateY(-74%)"
   }
};

function Category ({ classes }) {
    return (
        <Card className={classes.sub_category}>
            <span className={classes.item_category}>Category 1</span>
            <span className={classes.icon_cross} className="fa fa-times-circle-o" aria-hidden="true" />
        </Card>
    );   
}


export default withStyles(styles)(Category);