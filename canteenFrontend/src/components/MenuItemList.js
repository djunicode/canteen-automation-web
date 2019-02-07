import React from "react";

import MenuItem from "./core/MenuItemCard";
import endpoint from "../util/client";
import axios from "axios";

const menuEndpoint = endpoint.directory("menu");

class menuList extends React.Component {
    state = {
        data: [],
    };

    componentDidMount = async () => {
        const url = menuEndpoint.toString();
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
        return <div>{menuItemsList}</div>;
    };
}

export default menuList;
