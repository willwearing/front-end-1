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
  background-color: gray;
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
    axios.post('https://reqres.in/api/users', newUser)
      .then( res => {
        console.log(res);
        setUsers([res.data, 
          ...users]);
        setFormValues(initialFormValues);
      })
      .catch( err => {
        console.log(err);
      })
  }
  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser);
  }

  const submitLogin = () => {
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then((valid) => {
        setDisabled(!valid);
      })
  }, [formValues])

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
        values={formValues}
        errors={formErrors}
        change={change}
        disabled={disabled}
        submit={submitLogin}
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
