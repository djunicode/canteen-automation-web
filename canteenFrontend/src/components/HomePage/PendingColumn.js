import React from "react";
import OrderCard from "../core/OrderCard";
import SectionHeading from "../core/SectionHeading";

import "./PendingColumn.css";
import "./Cards.css";

class PendingColumn extends React.Component {
    state = {
        data: [
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
    };

    render = () => {
        const cards = this.state.data.map((e) => (
            <OrderCard
                name={e.name.toUpperCase()}
                quantity={e.quantity}
                pendingStatus={true}
                editable={true}
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
