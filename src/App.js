import "./App.css";
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FFF5EE;
`

const NavLinks = styled.div`
  text-decoration: none;
  background-color: white;
  padding: 1%;
  border-radius: 10px;
`

function App() {

  
  return (
    <Router>
    <div className="App">

      {/*Header/Nav*/}
      <Header>
      <h1>African Marketplace</h1>

      <NavLinks><Link to='/'>Home</Link></NavLinks>
      <NavLinks><Link to='/login'>Login</Link></NavLinks>
      <NavLinks><Link to='/signup'>Sign up</Link></NavLinks>
      <NavLinks><Link to='/items'>Items Listing</Link></NavLinks>
      </Header>

      {/*Login Form*/}
      <Route path='/login'>
        <LoginForm 
        // values={formValues}
        // errors={formErrors}
        // change={change}
        // disabled={disabled}
        // submit={submitLogin}
        />
      </Route>

      {/*Sign Up Form*/}
      <Route path='/signup'>
        <SignUpForm 
        // values={formValues}
        // errors={formErrors}
        // change={change}
        // submit={submit}
        // disabled={disabled}
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
