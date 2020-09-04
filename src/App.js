import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Login from './Login.js';
import Signup from './Signup.js';
import Home from './Home.js';
import Recipe1 from './Recipe1.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ReactBootstrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Navbar/>
      <Route path="/login" component={ Login}/>
      <Route path="/signup" component={ Signup}/>
      <Route path="/home" component={ Home}/>
      <Route path="/recipe" component={ Recipe1}/>
      </Router>
      
      </header>
    </div>
  );
}

export default App;
