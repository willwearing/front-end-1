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
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  //Form Schema
  const formSchema = yup.object().shape({
    name: yup.string().required('Name is Required').min(2, 'Name must be at least 2 characters'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
  })

  const change = (inputName, inputValue) => {
    yup.reach(formSchema, inputName).validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: ''
        })  
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  }

  const postNewUser = newUser => {

  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      password: formValues.name.trim()
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then((valid) => {
        setDisabled(!valid);
      })
  }, [formValues])

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
        <LoginForm 
        values={formValues}
        errors={formErrors}
        change={change}
        disabled={disabled}
        />
      </Route>

      {/*Sign Up Form*/}
      <Route path='/signup'>
        <SignUpForm 
        values={formValues}
        errors={formErrors}
        change={change}
        submit={submit}
        disabled={disabled}
        />
      </Route>
      
    </div>
  );
}

export default App;
