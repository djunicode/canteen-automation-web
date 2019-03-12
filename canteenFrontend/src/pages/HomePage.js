import React from "react";
import NavBar from "../components/common/NavBar";

import Footer from "../components/common/Footer";
import SearchRow from "../components/HomePage/SearchRow";
import MenuItemColumn from "../components/HomePage/MenuItemColumn";
import PendingColumn from "../components/HomePage/PendingColumn";
import CategoryColumn from "../components/HomePage/CategoryColumn";

import "./HomePage.css";

function HomePage() {
    return (
        <React.Fragment>
            <NavBar pos='home' />
            <div className='HomeGridContainer'>
                <PendingColumn />
                <SearchRow />
                <CategoryColumn />
                <MenuItemColumn />
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default HomePage;
