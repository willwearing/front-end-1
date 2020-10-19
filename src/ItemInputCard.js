import React from 'react';
import styled from 'styled-components'

const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 350px;
    font-family: QuickSand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px 
        rgba(0, 0, 0m .08);
    border-radius: 5px;
    `
const CardHeader = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
    `
const CardHeading = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    `

const CardPrice = styled.h3`
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    `

const CardBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;
    `
    
const CardLabel = styled.small`
    padding-top: 8px;
    display: block;
    width: 100%;
    font-size: 14px;
    text-align: left;
    `

const CardFieldset = styled.fieldset`
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
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-color: #e5195f;
    outline: 0;
  }
`

const CardText = styled.p`
    padding-top: 7px;
    width: 100%;
    font-size: 14px;
    text-align: left;
    font-family: inherit;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    `

const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
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
    const {values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    const onChange = (evt) => {
        const { name, value } = evt.target;
        change(name, value);
    }

    return (
        <CardWrapper onSubmit={onSubmit}>
            <CardHeading>
                <CardHeader>Add an Item</CardHeader>
            </CardHeading>

            <CardBody className='errors'>
                <CardFieldset>
                    <CardPrice>`$ ${errors.item_price}`</CardPrice>
                </CardFieldset>
                <CardFieldset>
                    <CardLabel>Description</CardLabel>
                    <CardText>
                        {errors.item_desription}
                    </CardText>
                </CardFieldset>
                <CardFieldset>
                    <CardLabel>Location</CardLabel>
                    <CardText>
                        {errors.item_location}
                    </CardText>
                </CardFieldset>
            </CardBody>
            

            <CardBody className='card-group inputs'>
                <CardFieldset>
                    <CardInput
                        placeholder='Item name'
                        type='text'
                        name='item_name'
                        onChange={onChange}
                        value={values.item_name}
                    />
                </CardFieldset>
                <CardFieldset>
                    <CardInput 
                        placeholder='Item price'
                        type='number'
                        name='item_price'
                        onChange={onChange}
                        value={values.item_price}
                    />
                </CardFieldset>
                <CardFieldset>
                    <CardInput
                        placeholder='Item Description'
                        type='text'
                        name='item_desription'
                        value={values.item_desription}
                    />
                </CardFieldset>
                <CardFieldset>
                    <CardInput
                        placeholder='Item Location'
                        type='text'
                        name='item_location'
                        value={values.item_location}
                        />
                </CardFieldset>
                <CardFieldset>
                    <CardButton 
                        type='button'
                        disabled={disabled}>
                        Register Item
                    </CardButton>
                </CardFieldset>
            </CardBody>
        </CardWrapper>
    )
    
}
