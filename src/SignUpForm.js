import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

                Name
                <input
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
                />

                Password
                <input
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}
                />

                <Link to='/dashboard'><button disabled={disabled}>Sign Up!</button></Link>
            </form>
        </div>
    )
}