import React from 'react';
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

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

export default function LoginForm(props) {

    const { values, errors, change, disabled, submit } = props;

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
                <h2>Login</h2>
                <Container>
                <Errors>{errors.name}</Errors>
                <Errors>{errors.password}</Errors>

                <Inputs>
                <label> 
                <input
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
                placeholder='Name'
                /></label></Inputs>

                <Inputs>
                <label> 
                <input
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}
                placeholder='Password'
                /></label></Inputs>

                <Button disabled={disabled}>Log in!</Button>
                </Container>
            </form>
        </EntirePage>
    )

}