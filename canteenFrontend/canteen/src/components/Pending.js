import React from 'react';
import MenuAppBar from './MenuAppBar';
import ButtonAppBar from './ButtonAppBar';
import ButtonAppBar2 from './ButtonAppBar2';
import Typography from '@material-ui/core/Typography';
function Pending(){
    return(
        <div>
            <MenuAppBar/>
            <br></br>
            <ButtonAppBar/>
            <ButtonAppBar2/>
            <div style={{width:'100%',height:460,backgroundColor:'#EEEEEE',marginTop:48,borderBottom:'3px solid #D0D8DD'}}>
                    
            </div>
            <div style={{width:'100%',height:51,backgroundColor:'#0477BD'}}>
            <Typography align='right' color='textPrimary' variant='h6'>TOTAL Rs. 12,500<span style={{paddingLeft:40,paddingRight:40}}>ORDERS 150</span>
            </Typography>
            </div>
        
        </div>
    )
}
export default Pending;
