import React from "react";

import { withStyles } from "@material-ui/core/styles";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import RoundSearchBar from "../components/core/RoundSearchBar";
import MenuItemColumn from "./MenuItemColumn";
import PendingColumn from "./PendingColumn";
import CategoryColumn from "./CategoryColumn";

const SearchRow = withStyles({
    SearchRow: {
        gridArea: "search",
        display: "flex",
        justifyContent: "center",
        padding: "8px 0 8px 0",
        borderBottom: "solid 5px #D0D8DD",
    },
})(({ classes }) => (
    <div className={classes.SearchRow}>
        <RoundSearchBar />
    </div>
));

const styles = {
    HomeGridContainer: {
        display: "grid",
        gridTemplateRows: "64px auto 8%",
        gridTemplateColumns: "27% 20% auto",
        gridTemplateAreas:
            '"pending search search"\n        "pending category menu"\n        "pending footer footer"',
        maxHeight: "fill-available",
    },
};

function HomePage({ classes }) {
    return (
        <React.Fragment>
            <NavBar pos='home' />
            <div className={classes.HomeGridContainer}>
                <PendingColumn />
                <SearchRow />
                <CategoryColumn />
                <MenuItemColumn />
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default withStyles(styles)(HomePage);
