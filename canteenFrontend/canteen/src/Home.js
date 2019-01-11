import React, { Component } from 'react';
import MenuAppBar from './components/MenuAppBar';
import Footer from './components/Footer';
// import './App.css';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import { Divider } from '@material-ui/core';
class Home extends Component {
      state = {  }
      render() { 
            return (
            <div>
                  <MenuAppBar/>
                  <PermanentDrawerLeft/>
            </div>
              );
      }
}
 
export default Home;