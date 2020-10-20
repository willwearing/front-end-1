import React from 'react';
import styled from 'styled-components'

const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px 25px 0;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px 	#3b444b, 0 0px 40px 	#3b444b;
    border-radius: 5px;
    background-color: #FFF5EE;
`

const CardHeader = styled.div`
    padding: 24px 32px 0 32px;
    `
const CardHeading = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    `

const CardBody = styled.div`
    padding: 12px 32px;
    `
    
const CardFieldset = styled.label`
    position: relative;
    padding: 0;
    margin: 0;
    border: 0;

    & + & {
    margin-top: 24px;
  }

    &:nth-last-of-type(2) {
    margin-top: 32px;
  }
  &:last-of-type {
    text-align: center;
  }
`
const CardInput = styled.input`
  padding: 7px 7px 7px 7px;
  width: 95%;
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

const CardText = styled.p`
    display: block;
    width: 100%;
    font-size: 12px;
    text-align: left;
    font-family: inherit;
    `

const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin: 12px 0;
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

export default function ItemInputCard(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    
    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
    }

    return (
    <form onSubmit={onSubmit}>
        <CardWrapper>
            
            <CardHeader>
                <CardHeading>
                    Add New Item
                </CardHeading>
            </CardHeader>
            <CardBody>
                <CardFieldset>
                    <CardInput
                        value={values.item_name}
                        onChange={onChange}
                        name='item_name'
                        type='text'
                        placeholder='Item name' 
                    />
                </CardFieldset>
                <CardText>{errors.item_name}</CardText>
                <CardFieldset>
                    <CardInput
                        value={values.item_price}
                        onChange={onChange}
                        name='item_price'
                        type='number'
                        min='0'
                        placeholder='Price' 
                    />
                </CardFieldset>
                <CardText>{errors.item_price}</CardText>
                <CardFieldset>
                    <CardInput
                        value={values.item_description}
                        onChange={onChange}
                        name='item_description'
                        type='text'
                        placeholder='Description'  
                    />
                </CardFieldset>
                <CardText>{errors.item_description}</CardText>
                <CardFieldset>
                    <CardInput
                        value={values.item_location}
                        onChange={onChange}
                        name='item_location'
                        type='text'
                        placeholder='Location'
                        />
                </CardFieldset>
                <CardText>{errors.item_location}</CardText>
                <CardFieldset>
                    <CardButton 
                        disabled={disabled}>
                        Register Item
                    </CardButton>
                </CardFieldset>
            </CardBody>
            
            </CardWrapper>
        </form>
    )
    
}
