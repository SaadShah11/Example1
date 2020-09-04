import React from 'react';
import './App.css';
import Login from './Login.js';
import * as ReactBootstrap from "react-bootstrap";

function Navbar() {
  return (
    <div className="App">
      <header className="App-header">
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <ReactBootstrap.Navbar.Brand href="/home">HOME</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="/recipe">RECIPES</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/package">ABOUT</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="/categories">CONTACT</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link  href="./signup">Signup</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="./login">Login</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
      </header>
    </div>
  );
}

export default Navbar;
