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

const CardDiv = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
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

const CardLabel = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: left;
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
            <CardDiv>
                <CardPrice>`$ ${details.item_price}`</CardPrice>
            </CardDiv>
            
            <CardBody>
                <CardFieldset>
                    <CardLabel>Description</CardLabel>
                    <CardText>
                        {details.item_desription}
                    </CardText>
                </CardFieldset>
                <CardFieldset>
                    <CardLabel>Location</CardLabel>
                    <CardText>
                        {details.item_location}
                    </CardText>
                </CardFieldset>
            </CardBody>
        </CardWrapper>

        )
    }


    


