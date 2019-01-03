import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import Footer from './components/Footer';
// import './App.css';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import { Divider } from '@material-ui/core';

function App() {

  return(

      <div>
        <MenuAppBar/>
        <PermanentDrawerLeft/>
      </div>


  )
}

export default App;