import React from "react";
import OrderCard from "../core/OrderCard";
import SectionHeading from "../core/SectionHeading";

import "./PendingColumn.css";
import "../common/Cards.css";

class PendingColumn extends React.Component {
    state = {
        food: [
            { name: "masala dosa", quantity: "2" },
            { name: "sada dosa", quantity: "3" },
            { name: "masala dosa", quantity: "4" },
            { name: "sandwhich", quantity: "4" },
            { name: "pav bhaji", quantity: "4" },
            { name: "vada pav", quantity: "4" },
            { name: "masala dosa", quantity: "2" },
            { name: "sada dosa", quantity: "3" },
            { name: "masala dosa", quantity: "4" },
            { name: "sandwhich", quantity: "4" },
            { name: "pav bhaji", quantity: "4" },
            { name: "vada pav", quantity: "4" },
        ],
        data: [],
    };

    componentDidMount = () => {
        this.ws = new WebSocket("ws://localhost:8000/ws/admin/");
        this.ws.onmessage = e => {
            console.log(e.data);
            let data = JSON.parse(e.data);
            this.setState({
                data,
            });
        };
    };

    render = () => {
        const cards = this.state.food.map((e, i) => (
            <OrderCard
                name={e.name.toUpperCase()}
                quantity={e.quantity}
                pendingStatus={true}
                editable={true}
                key={i}
            />
        ));

        return (
            <div className='PendingColumn'>
                <SectionHeading>Pending Orders</SectionHeading>
                <div className='cards-section'>{cards}</div>
            </div>
        );
    };
}

export default PendingColumn;
