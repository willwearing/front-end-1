import "./App.css";
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFF5EE;
  font-family: arial;
`

const Titlediv = styled.div`
  padding: 0 40px;
`

const Nav = styled.nav`
  display:flex;
  justify-content: space-around;
  align-items: center;
  height:50px;
  width:55%;
`

const Title = styled.h1`
  font-size: 24px;
  `

function App() {

  
  return (
    <Router>
    <div className="App">

      {/*Header/Nav*/}
      <Header>

        <Titlediv>
            <Title>African Marketplace</Title>
        </Titlediv>
        <Nav>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
          <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}>Sign up</Link>
          <Link to='/items' style={{ textDecoration: 'none', color: 'black' }}>Marketplace</Link>
        </Nav>
      </Header>

      {/*Login Form*/}
      <Route path='/login'>
        <LoginForm 
        />
      </Route>

      {/*Sign Up Form*/}
      <Route path='/signup'>
        <SignUpForm 
        />
      </Route>

      {/*Dashboard with Inputs*/}
      <Route path='/items'>
        <Dashboard/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
