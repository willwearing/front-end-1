import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import EditItemForm from "./EditItemForm";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff5ee;
`;

const NavLinks = styled.div`
  text-decoration: none;
  background-color: white;
  padding: 1%;
  border-radius: 10px;
`;

function App() {
  const initialFormValues = {
    name: "",
    password: "",
  };

  const initialFormErrors = {
    name: "",
    password: "",
  };

  //Slices of state
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  //Form Schema
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is Required")
      .min(2, "Name must be at least 2 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const change = (inputName, inputValue) => {
    yup
      .reach(formSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res);
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  const submitLogin = () => {
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <Router>
      <div className="App">
        {/*Header/Nav*/}
        <Header>
          <h1>African Marketplace</h1>

          <NavLinks className="App">
            <a href="https://landing-marketing.vercel.app/">Home</a>
          </NavLinks>

          <NavLinks>
            <Link to="/login">Login</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/signup">Sign up</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/dashboard">Dashboard</Link>
          </NavLinks>
        </Header>

        <Switch>
          {/*Login Form*/}
          <Route exact path="/login">
            <LoginForm
              values={formValues}
              errors={formErrors}
              change={change}
              disabled={disabled}
              submit={submitLogin}
            />
          </Route>

          {/*Sign Up Form*/}
          <Route path="/signup" component={SignUpForm} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/items/:id" component={EditItemForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
