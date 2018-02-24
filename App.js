import React, { Component } from 'react';
import './App.css';
import LogisticRegression from './pages/projects/logisticRegression'
import Home from "./pages/home"
import { removeHash } from 'react-scrollable-anchor'

class App extends Component {
  render() {
    return (
     <Home/>
    );
  }
}

export default App;
