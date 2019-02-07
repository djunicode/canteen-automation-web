import React from "react";
import PrimaryBar from "../components/PrimaryBar";
import PermanentDrawerLeft from "../components/PermanentDrawerLeft";

import styles from "./HomePage.css";

function HomePage() {
    return (
        <React.Fragment>
            <PrimaryBar pos='first' />
            <div className={styles.HomeGridContainer}>
                <PermanentDrawerLeft />
            </div>
        </React.Fragment>
    );
}

export default HomePage;
