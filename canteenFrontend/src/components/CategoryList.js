import React from "react";

import CategoryItem from "./core/CategoryCard";
import endpoint from "../util/client";
import axios from "axios";

const categoryEndpoint = endpoint.directory("categories");

class CategoryList extends React.Component {
    state = {
        data: [],
    };

    componentDidMount = async () => {
        const url = categoryEndpoint.toString();
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
        const categoryItemsList = this.state.data.map((e) => (
            <CategoryItem name={e.name} />
        ));
        return <div>{categoryItemsList}</div>;
    };
}

export default CategoryList;
