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
import NavTabs from './Orders'
function App() {

  return(
    <BrowserRouter>
    <div>
      {/* <NavHome/>
      <NavCompleted/>
      <NavPending/> */}
      <MenuAppBar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Orders" component={NavTabs} exact />
        <Route component={Error}/>
      </Switch>
      <Footer/>
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
