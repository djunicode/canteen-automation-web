import React from "react";
import Typography from "@material-ui/core/Typography";
import OrderCard from "../core/OrderCard";

import endpoint from "../../util/client";
import axios from "axios";

import "./CommonLayout.css";

class Completed extends React.Component {
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

    componentDidMount = async () => {
        const url = endpoint()
            .directory("orders/completed")
            .toString();
        try {
            const response = await axios.get(url);
            this.setState({
                data: response.data,
            });
        } catch(e) {
            alert(`Couldn't GET /orders/completed/ ERROR ${e}`)
        };
    };

    render() {
        const cards = this.state.food.map((e) => (
            <OrderCard
                name={e.name.toUpperCase()}
                quantity={e.quantity}
                pendingStatus={false}
                editable={false}
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

                    </div>
        );
    }
}
export default Completed;
