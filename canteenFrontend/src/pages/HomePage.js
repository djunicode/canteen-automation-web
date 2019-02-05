import React from "react";
import PrimaryBar from "../components/PrimaryBar";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft";

function Home() {
    return (
        <React.Fragment>
            <PrimaryBar pos="first"/>
            <PermanentDrawerLeft />
        </React.Fragment>
    );
}
export default Home;
