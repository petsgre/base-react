import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome'
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload1.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Welcome name="Sara" />
        </header>
      </div>
    );
  }
}

export default App;
