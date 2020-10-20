import "./App.css";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 3% 20%;
  margin-top: 5%;
  padding: 1% 2% 2% 2%;
  background-color: #FFF5EE;
  display: flex;
  flex-direction: column;
`

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
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`

const Inputs = styled.div`
    margin-top: 3%;
`

const Errors = styled.div`
    color: red;
`

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
`
const TextInput = styled.input`
  padding: 7px 7px 7px 7px;
  width: 65%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-color: #777;
    outline: 0;
  }
`

const EntirePage = styled.div`
    background-color: lightgray;
    padding-top: 1%;
    padding-bottom: 60%;
    background-image: url('https://cdn.nazmiyalantiquerugs.com/wp-content/uploads/2017/04/antique-blue-bakground-isfahan-persian-rug-51066.jpg');
`

export default function LoginForm(props) {

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

      const submitLogin = () => {
        setFormValues(initialFormValues);
      }
    
      useEffect(() => {
        formSchema.isValid(formValues)
          .then((valid) => {
            setDisabled(!valid);
          })
      }, [formValues])


      const history = useHistory();

    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submitLogin();
        history.push('/dashboard');
    }

    return (
        <EntirePage>
            <form onSubmit={onSubmit}>
                
                <Container>
                <h2>Login</h2>
                <Errors>{formErrors.name}</Errors>
                <Errors>{formErrors.password}</Errors>

                <TextInputAround>
                <label> 
                <TextInput
                type='text'
                name='name'
                value={formValues.name}
                onChange={onChange}
                placeholder='Name'
                /></label></TextInputAround>

                <TextInputAround>
                <label> 
                <TextInput
                type='text'
                name='password'
                value={formValues.password}
                onChange={onChange}
                placeholder='Password'
                /></label></TextInputAround>

                <Button disabled={disabled}>Log in!</Button>
                </Container>
            </form>
        </EntirePage>
    )

}