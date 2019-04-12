import React from "react";

import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core";

import SectionHeading from "../components/core/SectionHeading";
import CategoryItem from "../components/core/CategoryCard";

import endpoint from "../util/client";
import axios from "axios";

import "../components/common/Cards.css";
import AddCategory from "./AddCategory";

const RightFab = withStyles({
    root: {
        position: "relative",
        right: "-16px",
        left: "auto",
    },
})(Fab);

const styles = {
    "CategoryColumn": {
      "gridArea": "category",
      "overflow": "auto",
      "borderRight": "5px solid #D0D8DD",
      "display": "flex",
      "flexDirection": "column"
    },
    "CategoryColumn____column_heading": { // ____ ka matlab hai .CategoryColumn > .column_heading. This is react syntax.
      "display": "flex",
      "justifyContent": "center"
    }
};

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
        const { classes } = this.props;

        const categoryItemsList = this.state.data.map((e, i) => (
            <CategoryItem {...e} key={i} />
        ));

        return (
            <div className={classes.CategoryColumn}>
                <SectionHeading className={classes.CategoryColumn____column_heading}>
                    Categories
                    <RightFab
                        size="small">
                        {/* <AddIcon /> */}
                        <AddCategory />
                    </RightFab>
                </SectionHeading>

                <div className='cards-section'>{categoryItemsList}</div>
            </div>
        );
    };
}

export default withStyles(styles)(CategoryColumn);
