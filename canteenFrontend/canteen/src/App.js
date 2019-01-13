import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import ButtonAppBar from './components/ButtonAppBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';

import Orders from './components/Orders';


function App() {

  return(
    <div>
    <Router>
      <div>
      <Route exact path="/" component={Home} />
    <Route path="/Orders" component={Orders} />
    <Route path="/Home" component={Home} />

      </div>
    </Router> 
    </div>   
  );
   
} 

export default App;