import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import Footer from './components/Footer';
// import './App.css';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import { Divider } from '@material-ui/core';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import Pending from './PendingOrders'
import Completed from './CompletedOrders'
import Error from './Error'
import NavHome from './components/NavHome'
import NavPending from './components/NavPending'
import NavCompleted from './components/NavCompleted'
function App() {

  return(
    <BrowserRouter>
    <div>
      {/* <NavHome/>      
      <NavCompleted/>
      <NavPending/> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Orders/Pending" component={Pending} exact />
        <Route path="/Orders/Completed" component={Completed} exact />
        <Route component={Error}/>
      </Switch>
      </div>
    </BrowserRouter>
    
      //Should be in page:HOME
      // <div>
      //   <MenuAppBar/>
      //   <PermanentDrawerLeft/>
      // </div>


  )
}

export default App;
