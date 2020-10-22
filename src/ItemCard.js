import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteItem } from "./actions/index";
import { useHistory } from "react-router-dom";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 325px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px #3b444b, 0 0px 40px #3b444b;
  border-radius: 5px;
  background-color: #fff5ee;
`;

const CardHeader = styled.header`
  padding: 24px 35px 0 35px;
`;

const CardHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const CardPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  padding: 0 2px 0 2px;
`;

const CardBody = styled.div`
  padding: 0 32px;
`;

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
`;
const CardTextBox = styled.div`
  padding: 7px 7px 7px 7px;
  width: 90%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
`;

const CardText = styled.p`
  padding-top: 7px;
  width: 90%;
  font-size: 14px;
  text-align: left;
  font-family: inherit;
  margin: 0 5px;
`;

const CardLabel = styled.small`
  padding-top: 8px;
  font-weight: bold;
  display: block;
  width: 90%;
  font-size: 12px;
  text-align: left;
  margin: 0 10px;
`;

const CardButton = styled.button`
  display: block;
  width: 40%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin: 0 auto;
  margin-top: 15px;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1); ;
`;

const ItemCard = ({ details, deleteItem }) => {
  const history = useHistory();

  const deleteClick = (e) => {
    e.preventDefault();
    deleteItem(details);
  };

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>{details.name}</CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardPrice>$ {details.price}</CardPrice>
        </CardFieldset>
        <CardFieldset>
          <CardLabel>Description</CardLabel>
          <CardTextBox>
            <CardText>{details.description}</CardText>
          </CardTextBox>
        </CardFieldset>
        <CardFieldset>
          <CardLabel>Location</CardLabel>
          <CardTextBox>
            <CardText>{details.location}</CardText>
          </CardTextBox>
        </CardFieldset>
      </CardBody>
      <CardButton onClick={() => history.push(`/items/${details.id}`)}>
        Edit
      </CardButton>
      <CardButton onClick={deleteClick}>Delete</CardButton>
    </CardWrapper>
  );
};

export default connect(null, { deleteItem })(ItemCard);
