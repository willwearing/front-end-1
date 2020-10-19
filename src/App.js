import "./App.css";
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'

function App() {

  const initialFormValues = {
    name: '',
    password: ''
  }

  const initialFormErrors = {
    name: '',
    password: ''
  }


  //Slices of state
  const [formValues, setFormValues] = useState(formValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors]
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="App">

      {/*Header/Nav*/}
      <header>
      <h1>African Marketplace</h1>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign up</Link>
      </header>

      {/*Login Form*/}
      <Route path='/login'>
        <LoginForm />
      </Route>

      {/*Sign Up Form*/}
      <Route path='/signup'>
        <SignUpForm />
      </Route>
      
    </div>
  );
}

export default App;
