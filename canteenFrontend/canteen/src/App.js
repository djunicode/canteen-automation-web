import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>THIS WILL BE FUN!</h1>
          <h2>Canteen Web Team is much better than the other teams</h2>
          <p>Also, Frontend team is much better than backend team</p>
          <p>All the best Manav, Shreya, Vikrant, Chinmay! Happy coding :p</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
