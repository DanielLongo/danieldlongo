import React, { Component } from 'react';
import './App.css';
import LogisticRegression from './pages/projects/logisticRegression'
import Home from "./pages/home"
import { removeHash } from 'react-scrollable-anchor'
import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga';
// import "./views/canvaBackground.css"
// import "./views/canvaBackground.html"

// npm install react-hotjar --save
//npm install react-html-parser
//npm i webpack --save-dev

class App extends Component { 
  render() {
    hotjar.initialize(798187, 6);
    ReactGA.initialize('UA-115296983-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
    <div>
     	<Home/>
    </div>
    );
  }
}

export default App;
