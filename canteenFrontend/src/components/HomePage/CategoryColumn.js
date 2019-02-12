import React from "react";

import SectionHeading from "../core/SectionHeading";
import CategoryItem from "../core/CategoryCard";
import endpoint from "../../util/client";
import axios from "axios";

import "./CategoryColumn.css";
import "./Cards.css";

class CategoryList extends React.Component {
    state = {
        data: [],
    };

    componentDidMount = async () => {
        const url = endpoint()
            .directory("categories")
            .toString();
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
        return (
            <div className='CategoryColumn'>
                <SectionHeading className='menu-column-heading'>
                    Categories
                </SectionHeading>
                <div className='cards-section'>{categoryItemsList}</div>
            </div>
        );
    };
}

export default CategoryList;
