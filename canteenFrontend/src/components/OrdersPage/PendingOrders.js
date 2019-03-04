import React from "react";
import Typography from "@material-ui/core/Typography";
import OrderCard from "../core/OrderCard";

import endpoint from "../../util/client";
import axios from "axios";

import "./CommonLayout.css";

class Pending extends React.Component {
    state = {
        food: [
            { name: "masala dosa", quantity: "2" },
            { name: "sada dosa", quantity: "3" },
            { name: "masala dosa", quantity: "4" },
        ],
    };

    componentDidMount = async () => {
        const url = endpoint()
            .directory("orders/completed")
            .toString();
        const response = await axios.get(url);
        if (response.status === 200) {
            this.setState({
                food: response.data,
            });
        } else {
            alert(`Couldn't GET /orders/completed/ ERROR ${response.status}`);
        }
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
            <React.Fragment>
                <div
                    style={{
                        width: "100%",
                        height: 455,
                        backgroundColor: "orange",
                        borderBottom: "3px solid #D0D8DD",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#EEEEEE",
                            width: "33.3%",
                            height: "100%",
                            flexDirection: "column",
                        }}
                    >
                        <br />
                        <br />
                        {cards}
                        <br />
                    </div>
                    <div
                        style={{
                            backgroundColor: "#EEEEEE",
                            width: "33.3%",
                            height: "100%",
                        }}
                    >
                        <br />
                        <br />
                        {cards}
                        <br />
                    </div>
                    <div
                        style={{
                            backgroundColor: "#EEEEEE",
                            width: "33.3%",
                            height: "100%",
                        }}
                    >
                        <br />
                        <br />
                        {cards}
                        <br />
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
            </React.Fragment>
        );
    }
}
export default Pending;
