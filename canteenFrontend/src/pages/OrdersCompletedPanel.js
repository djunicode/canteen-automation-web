import React from "react";
import Typography from "@material-ui/core/Typography";
import PendingCards from "../components/core/PendingCards"
import OrdersBar from "../components/OrdersBar";

function Completed() {
    return (

        <div>
            <OrdersBar pos="completed"/>
        <div
            style={{
                width: "100%",
                height: 455,
                backgroundColor: "orange",
                borderBottom: "3px solid #D0D8DD",
                display:'flex',
                flexDirection:'row',
            }}
         >
               <div style={{backgroundColor:'#EEEEEE',width:'33.3%',height:'100%',flexDirection:'column'}}>
                        <br/>                           
                        <PendingCards Name="wada" Quantity="5" Color="#00C952"/>
                        <br/>
                        <PendingCards Name="sandwich" Quantity="6" Color="#00C952"/>
                        <br/>
                        <PendingCards Name="wada" Quantity="5" Color="#00C952"/>
    
               </div>
               <div style={{backgroundColor:'#EEEEEE',width:'33.3%',height:'100%'}}>
                        <br/>                           
                        <PendingCards Name="wada" Quantity="5" Color="#00C952"/>
                        <br/>
                        <PendingCards Name="sandwich" Quantity="6" Color="#00C952"/>
                        <br/>
                        <PendingCards Name="wada" Quantity="5" Color="#00C952"/>
               </div>
               <div style={{backgroundColor:'#EEEEEE',width:'33.3%',height:'100%'}}>
               <br/>                           
                        <PendingCards Name="wada" Quantity="5" Color="#00C952"/>
                        <br/>
                        <PendingCards Name="sandwich" Quantity="6" Color="#00C952"/>
                        <br/>
                        <PendingCards Name="wada" Quantity="5" Color="#00C952"/>
               
               </div>
            
        </div>
        <div
            style={{
                width: "100%",
                height: 51,
                backgroundColor: "#0477BD",
            }}
        >
            <Typography align='right' color='textPrimary' variant='h6'>
                TOTAL Rs. 12,500
                <span style={{ paddingLeft: 40, paddingRight: 40 }}>
                    ORDERS 150
                </span>
            </Typography>
        </div>
    </div>
    );
}
export default Completed;
