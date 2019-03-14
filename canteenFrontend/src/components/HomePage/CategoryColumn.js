import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core";
import SectionHeading from "../core/SectionHeading";
import CategoryItem from "../core/CategoryCard";

import endpoint from "../../util/client";
import axios from "axios";

import "./CategoryColumn.css";
import "../common/Cards.css";

const RightFab = withStyles({
    root: {
        position: "relative",
        right: "-16px",
        left: "auto",
    },
})(Fab);

class CategoryColumn extends React.Component {
    state = {
        data: [],
    };

    componentDidMount = async () => {
        const url = endpoint()
            .directory("categories")
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
        const categoryItemsList = this.state.data.map((e, i) => (
            <CategoryItem name={e.name} key={i} />
        ));
        return (
            <div className='CategoryColumn'>
                <SectionHeading className='category-column-heading'>
                    Categories
                    <RightFab
                        size="small">
                        <AddIcon />
                    </RightFab>
                </SectionHeading>
                <div className='cards-section'>{categoryItemsList}</div>
            </div>
        );
    };
}

export default CategoryColumn;
