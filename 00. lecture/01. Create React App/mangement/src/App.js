import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  // function App() {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} lat="logo"/>
        <h2>Let's develop mamagement system!</h2>
      </div>
    );
  }
}

export default App;
