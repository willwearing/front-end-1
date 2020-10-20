import "./App.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import { signUp } from "./actions/index";

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 3% 20%;
  margin-top: 5%;
  padding: 1% 2% 2% 2%;
  background-color: #fff5ee;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  display: block;
  width: 50%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin: 12px auto;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const Inputs = styled.div`
  margin-top: 3%;
`;

const Errors = styled.div`
  color: red;
`;

const EntirePage = styled.div`
  background-color: lightgray;
  padding-top: 1%;
  padding-bottom: 60%;
  background-image: url("https://cdn.nazmiyalantiquerugs.com/wp-content/uploads/2017/04/antique-blue-bakground-isfahan-persian-rug-51066.jpg");
`;

const TextInputAround = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
    margin-bottom: 10px;
  }

  &:nth-last-of-type(2) {
    margin-top: 10px;
  }
  &:last-of-type {
    text-align: center;
  }
`;
const TextInput = styled.input`
  padding: 7px 7px 7px 7px;
  width: 65%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-color: #777;
    outline: 0;
  }
`;

const SignUpForm = (props) => {
  const initialFormValues = {
    username: "",
    password: "",
    department: "",
  };

  const initialFormErrors = {
    username: "",
    password: "",
  };

  //Slices of state
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (evt) => {
    debugger;
    evt.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      department: formValues.department.trim(),
    };
    props.signUp(newUser);
    history.push("/login");
  };

  return (
    <EntirePage>
      <form onSubmit={onSubmit}>
        <Container>
          <h2>Sign Up</h2>
          <Errors>{formErrors.username}</Errors>
          <Errors>{formErrors.password}</Errors>

          <TextInputAround>
            <label>
              <TextInput
                type="text"
                name="username"
                value={formValues.username}
                onChange={onChange}
                placeholder="Name"
              />
            </label>
          </TextInputAround>

          <TextInputAround>
            <label>
              <TextInput
                type="text"
                name="password"
                value={formValues.password}
                onChange={onChange}
                placeholder="Password"
              />
            </label>
          </TextInputAround>

          <TextInputAround>
            <label>
              <TextInput
                type="text"
                name="department"
                value={formValues.department}
                onChange={onChange}
                placeholder="Seller or Buyer?"
              />
            </label>
          </TextInputAround>

          <Button>Sign Up!</Button>

          {/*<Link to='/dashboard'><Button disabled={disabled}>Sign Up!</Button></Link>*/}
        </Container>
      </form>
    </EntirePage>
  );
};

export default connect(null, { signUp })(SignUpForm);
