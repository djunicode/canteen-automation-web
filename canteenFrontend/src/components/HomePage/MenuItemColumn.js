import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import SectionHeading from "../core/SectionHeading";
import MenuItem from "../core/MenuItemCard";

import axios from "axios";
import endpoint from "../../util/client";

import "./MenuItemColumn.css";
import "../common/Cards.css";

const StyledButton = withStyles({
    root: {
        color: "#0477BD",
        backgroundColor: "white",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        
        padding: "8px 32px 8px 32px",
        border: "solid 3px",
        borderRadius: "26px",
        
        position: "absolute",
        right: "16px",
        left: "auto",
    },
})(Button);

class MenuItemColumn extends React.Component {
    state = {
        data: [],
    };

    componentDidMount = async () => {
        const url = endpoint()
            .directory("menu")
            .toString();
        try {
            const response = await axios.get(url);
            this.setState({
                data: response.data,
            });
        } catch(e) {
            alert(`Couldn't GET /categories/ ERROR ${e}`);
        };
    };

    render = () => {
        const menuItemsList = this.state.data.map((e, i) => (
            <MenuItem {...e} key={i} />
        ));
        return (
            <div className='MenuItemColumn'>
                <SectionHeading>
                    Items
                    <StyledButton disableRipple>Add Item</StyledButton>
                </SectionHeading>
                <div className="cards-section">
                    {menuItemsList}
                </div>
            </div>
        );
    };
}

export default MenuItemColumn;
