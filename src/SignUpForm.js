import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  margin: 2% 15%;
  padding: 2% 2%;
  background-color: white;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
    text-decoration: none;
    width: 15%;
    margin: auto;
    margin-top: 2%;
`

export default function SignUpForm(props) {

    const { values, errors, change, submit, disabled } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Sign Up</h2>

                <Container>
                <div>{errors.name}</div>
                <div>{errors.password}</div>
                <label>Name
                <input
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
                /></label>

                <label>Password
                <input
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}
                /></label>

                <Link to='/dashboard'><Button disabled={disabled}>Sign Up!</Button></Link>
                </Container>
            </form>
        </div>
    )
}