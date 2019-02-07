import React from "react";
import OrderCard from "../core/OrderCard";
import SectionHeading from "../core/SectionHeading";

import "../core/styles";

class PendingColumn extends React.Component {
    state = {
        data: [
            { Name: "masala dosa", Quantity: "2" },
            { Name: "sada dosa", Quantity: "3" },
            { Name: "masala dosa", Quantity: "4" },
            { Name: "sandwhich", Quantity: "4" },
            { Name: "pav bhaji", Quantity: "4" },
            { Name: "vada pav", Quantity: "4" },
        ],
    };

    render = () => {
        const cards = this.state.data.map((e) => (
            <OrderCard
                Name={e.Name.toUpperCase()}
                Quantity={e.Quantity}
                pendingStatus={true}
                editable={true}
            />
        ));

        return (
            <div className="PendingColumn">
                <SectionHeading>
                    PENDING ORDERS
                </SectionHeading>
                <div>{cards}</div>
            </div>
        );
    };
}

export default PendingColumn;
