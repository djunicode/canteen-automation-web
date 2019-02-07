import React from "react";
import Typography from "@material-ui/core/Typography";
import OrderCard from "../components/core/OrderCards"
import OrdersBar from "../components/OrdersBar";

class Completed extends React.Component {
    state={
        food:[
            {Name:'masala dosa', Quantity:'2'},
            {Name:'sada dosa' ,Quantity:'3'},
            {Name:'masala dosa', Quantity:'4'},

        ]
    }
    render(){

        const cards = this.state.food.map(e =>
            <OrderCard Name={e.Name.toUpperCase()} Quantity={e.Quantity}  pendingStatus={false} editable={false}/>
        );
    return (

        <div>
            <OrdersBar pos="completed"/>
        <div
            style={{
                width: "100%",
                height: 455,
                backgroundColor: "green",
                borderBottom: "3px solid #D0D8DD",
                display:'flex',
                flexDirection:'row',
            }}
         >
               <div style={{backgroundColor:'#EEEEEE',width:'33.3%',height:'100%',flexDirection:'column'}}>
                        <br/>
                        <br/>
                        {cards}
                        <br/>



               </div>
               <div style={{backgroundColor:'#EEEEEE',width:'33.3%',height:'100%'}}>
                        <br/>
                        <br/>
                        {cards}
                        <br/>

               </div>
               <div style={{backgroundColor:'#EEEEEE',width:'33.3%',height:'100%'}}>
                        <br/>
                        <br/>
                        {cards}
                        <br/>

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
}
export default Completed;
