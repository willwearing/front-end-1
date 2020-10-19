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

export default function LoginForm(props) {

    const { values, errors, change, disabled } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                <Container>
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

                <Link to='/dashboard'><button disabled={disabled}>Log In!</button></Link>
                </Container>
            </form>
        </div>
    )

}