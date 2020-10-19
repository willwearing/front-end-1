import "./App.css";
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Form from './Form';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'

function App() {


  return (
    <div className="App">

      {/*Header/Nav*/}

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
