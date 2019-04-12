import React from "react";

import { withStyles } from "@material-ui/core/styles";
import OrderCard from "../components/core/OrderCard";
import SectionHeading from "../components/core/SectionHeading";

import "../components/common/Cards.css";

const styles = {
    "PendingColumn": {
      "backgroundColor": "#F3F3F3",
      "height": "81vh",
      "overflowY": "auto",
      "overflowX": "hidden",
      "gridArea": "pending",
      "borderRight": "5px solid #D0D8DD"
    },
    "PendingColumn____column_heading": {
      "background": "inherit"
    }
};

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
        const { classes } = this.props;

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
            <div className={classes.PendingColumn}>
                <SectionHeading>Pending Orders</SectionHeading>
                <div className='cards-section'>{cards}</div>
            </div>
        );
    };
}

export default withStyles(styles)(PendingColumn);
