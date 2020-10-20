import "./App.css";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 2% 20%;
  padding: 2% 2%;
  background-color: white;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
    text-decoration: none;
    width: 25%;
    margin: auto;
    margin-top: 2%;
    padding: 2% 5%;
`

const Inputs = styled.div`
    margin-top: 3%;
`

const Errors = styled.div`
    color: red;
`

const EntirePage = styled.div`
    background-color: lightgray;
    padding-top: 1%;
    padding-bottom: 60%;
`

export default function SignUpForm(props) {

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
        submit();
        history.push('/dashboard');
    }

    return (
        <EntirePage>
            <form onSubmit={onSubmit}>
                <h2>Sign Up</h2>

                <Container>
                <Errors>{formErrors.name}</Errors>
                <Errors>{formErrors.password}</Errors>

                <Inputs>
                <label> 
                <input
                type='text'
                name='name'
                value={formValues.name}
                onChange={onChange}
                placeholder='Name'
                /></label></Inputs>
                
                <Inputs>
                <label> 
                <input
                type='text'
                name='password'
                value={formValues.password}
                onChange={onChange}
                placeholder='Password'
                /></label></Inputs>

                <Button disabled={disabled}>Sign Up!</Button>

                {/*<Link to='/dashboard'><Button disabled={disabled}>Sign Up!</Button></Link>*/}
                </Container>
            </form>
        </EntirePage>
    )
}