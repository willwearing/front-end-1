import React from 'react';
import styled from 'styled-components'


const CardWrapper = styled.div`
  overflow: hidden;
    margin: 48px 25px 0;
    width: 300px;
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
  background-color: white;
`

const CardText = styled.p`
    padding: 0px 5px;
    width: 90%;
    font-size: 14px;
    text-align: left;
    font-family: inherit;
    overflow: hidden;
    margin: 5px;
    `

const CardLabel = styled.div`
  padding: 5px 0 0 18px;
  font-weight: bold;
  display: block;
  font-size: 12px;
  text-align: left;
  margin: 0 10px;
  background-color: white;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 35%;
  float: left;
  margin: -12px 5px ;
`
const Location = styled.div`
  width: 90%;
`
const LocationText = styled.p`
  width: 90%;
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

        <CardWrapper className='card'>
            <CardHeader>
                <CardHeading>{details.item_name}</CardHeading>
            </CardHeader>
            <CardBody>
                <CardFieldset>
                  <CardPrice>$ {details.item_price}</CardPrice>
                </CardFieldset>
                <CardFieldset>
                    <CardLabel class="tablinks">Description</CardLabel>
                    <CardTextBox>
                    <CardText>
                        {details.item_description}
                    </CardText>
                    </CardTextBox>
                </CardFieldset>
                <CardFieldset>
                    <Location>Location</Location>
                    <LocationText>
                        {details.item_location}
                    </LocationText>
                </CardFieldset>
            </CardBody>
        </CardWrapper>

        )
    }


    


