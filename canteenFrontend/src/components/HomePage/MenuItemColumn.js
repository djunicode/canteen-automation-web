import React from "react";

import MenuItem from "../core/MenuItemCard";
import endpoint from "../../util/client";
import axios from "axios";

import "./MenuItemColumn.css";

class MenuItemColumn extends React.Component {
    state = {
        data: [],
    };

    componentDidMount = async () => {
        const url = endpoint().directory("menu").toString();
        const response = await axios.get(url);
        if (response.status === 200) {
            this.setState({
                data: response.data,
            });
        } else {
            alert(`Couldn't GET /categories/ ERROR ${response.status}`);
        }
    };

    render = () => {
        const menuItemsList = this.state.data.map((e) => <MenuItem {...e} />);
        return <div className="MenuItemColumn">{menuItemsList}</div>;
    };
}

export default MenuItemColumn;
