
import React from 'react';
import MenuAppBar from './MenuAppBar';
import ButtonAppBar from './ButtonAppBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pending from './Pending';
import Completed from './Completed';
import PermanentDrawerLeft from './PermanentDrawerLeft';
function Home(){
    return(
        <div>
            <div style={{width:'100%',height:140}}>
            <MenuAppBar/>
            <br></br>
            <ButtonAppBar/>
            </div>
            <PermanentDrawerLeft/>
            
    <Route path="/Orders/pending" component={Pending} />
    <Route path="/Orders/completed" component={Completed} />
        </div>
    )
}
export default Home;