import React from 'react';
import MenuAppBar from './components/MenuAppBar';
//import Footer from './components/Footer';
// import './App.css';
//import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import ButtonAppBar from './components/ButtonAppBar'

function Header() {

  return(

      <div>
        <MenuAppBar/>
        <br></br>
        <ButtonAppBar/>
      </div>


  )
}

export default Header;