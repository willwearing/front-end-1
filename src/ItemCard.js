import React from 'react';
import styled from 'styled-components'


const CardWrapper = styled.div`
  overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 325px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px 	#3b444b, 0 0px 40px 	#3b444b;
    border-radius: 5px;
    background-color: #FFF5EE;
`

const CardHeader = styled.header`
  padding: 24px 35px 0 35px;
  
`

const CardHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  `

const CardPrice = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    padding: 0 2px 0 2px;
    `

const CardBody = styled.div`
    padding: 0 32px;
    `

const CardFieldset = styled.fieldset`
    position: relative;
    padding: 0;
    margin: 0;
    border: 0;

    & + & {
    margin-top: 12px;
  }

    &:nth-last-of-type(2) {
    margin-top: 12px;
  }
  &:last-of-type {
    text-align: center;
  }
`
const CardTextBox = styled.div`
  padding: 7px 7px 7px 7px;
  width: 90%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
`

const CardText = styled.p`
    padding-top: 7px;
    width: 90%;
    font-size: 14px;
    text-align: left;
    font-family: inherit;
    margin: 0 5px;
    `

const CardLabel = styled.small`
  padding-top: 8px;
  font-weight: bold;
  display: block;
  width: 90%;
  font-size: 12px;
  text-align: left;
  margin: 0 10px;
  
`

export default function ItemCard({ details }){
    if (!details) {

        return ( 
             
            <CardWrapper>
                <CardHeader>
                    <CardHeading>Fetching your item&apos;s ...</CardHeading>
                </CardHeader>
                <CardBody>
                </CardBody>
            </CardWrapper>
        )}

    return (

        <CardWrapper>
            <CardHeader>
                <CardHeading>{details.item_name}</CardHeading>
            </CardHeader>
            <CardBody>
                <CardFieldset>
                  <CardPrice>$ {details.item_price.toFixed(2)}</CardPrice>
                </CardFieldset>
                <CardFieldset>
                    <CardLabel>Description</CardLabel>
                    <CardTextBox>
                    <CardText>
                        {details.item_description}
                    </CardText>
                    </CardTextBox>
                </CardFieldset>
                <CardFieldset>
                    <CardLabel>Location</CardLabel>
                    <CardTextBox>
                    <CardText>
                        {details.item_location}
                    </CardText>
                    </CardTextBox>
                </CardFieldset>
            </CardBody>
        </CardWrapper>

        )
    }


    


