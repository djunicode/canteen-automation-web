import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import Footer from './components/Footer';
import './App.css';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';


function App() {

  return(
   
      <div>
        <MenuAppBar/>
        <PermanentDrawerLeft/>
      </div>
      
  
  )
}

export default App;