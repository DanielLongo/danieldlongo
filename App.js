import React, { Component } from 'react';
import './App.css';
import LogisticRegression from './pages/projects/logisticRegression'
import Home from "./pages/home"
import { removeHash } from 'react-scrollable-anchor'
import { hotjar } from 'react-hotjar';
// import "./views/canvaBackground.css"
// import "./views/canvaBackground.html"

// npm install react-hotjar --save
//npm install react-html-parser
//npm i webpack --save-dev

class App extends Component { 
  render() {
  	hotjar.initialize(798187, 6);
    return (
    <div>
     	<Home/>
    </div>
    );
  }
}

export default App;
