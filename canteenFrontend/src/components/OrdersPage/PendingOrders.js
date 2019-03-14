import React from "react";
import Typography from "@material-ui/core/Typography";
import OrderCard from "../core/OrderCard";

import "./CommonLayout.css";

class Pending extends React.Component {
    state = {
        food: [
            { name: "masala dosa", quantity: "2" },
            { name: "sada dosa", quantity: "3" },
            { name: "masala dosa", quantity: "4" },
            { name: "masala dosa", quantity: "2" },
            { name: "sada dosa", quantity: "3" },
            { name: "masala dosa", quantity: "4" },
            { name: "masala dosa", quantity: "2" },
            { name: "sada dosa", quantity: "3" },
            { name: "masala dosa", quantity: "4" },
        ],
        data: [],
    };

    componentDidMount = () => {
        this.ws = new WebSocket("ws://localhost:8000/ws/admin/");
        this.ws.onmessage = e => {
            console.log("PENDING ORDERS PAGE: ", e.data);
            let data = JSON.parse(e.data);
            this.setState({
                data,
            });
        };
    };
    
    render() {
        const cards = this.state.food.map((e) => (
            <OrderCard
                name={e.name.toUpperCase()}
                quantity={e.quantity}
                Color={e.Color}
                pendingStatus={true}
                editable={true}
            />
        ));

        return (
            <div style={{backgroundColor:'#EEEEEE'}}>
               
               <div style={{backgroundColor:'#EEEEEE',
                            width:'80vw',
                            height:'63vh',
                            marginLeft:'10%',
                            display:'flex',
                            flexWrap:'wrap',
                            }}>
                        
                        <br/>
                        {cards}
                        
                        <br/>



               </div>
              

        
        <div
            style={{
                width: "100%",
                height:51,
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
            {/*<div className="OrdersLayout">
                <div className="CardsSection">
                    <div
                        style={{
                            backgroundColor: "blue",
                            marginLeft:'10%',
                            width: "80%",
                            height: "100%",
                            flexWrap:"wrap",
                            flexDirection:'row',
                        }}>
                        <br />
                        <br />
                        {cards}
                        {cards}
                        <br />
                    </div>
                    <div
                        style={{
                            backgroundColor: "red",
                            width: "33.3%",
                            height: "100%",
                        }}>
                        <br />
                        <br />
                        {cards}
                        <br />
                    </div>
                    <div
                        style={{
                            backgroundColor: "pink",
                            width: "33.3%",
                            height: "100%",
                        }}>
                        <br />
                        <br />
                        {cards}
                        <br />
                    </div>
                </div>

                <div className="FooterSection">
                    <Typography align='right' color='textPrimary' variant='h6'>
                        TOTAL Rs. 12,500
                        <span style={{ paddingLeft: 40, paddingRight: 40 }}>
                            ORDERS 150
                        </span>
                    </Typography>
                </div>
                    </div>*/}
           </div>
        );
    }
}
export default Pending;
