import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItem } from "./actions/index";
// import e from "express";

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

const CardHeader = styled.div`
  padding: 24px 32px 0 32px;
`;
const CardHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const CardBody = styled.div`
  padding: 12px 32px;
`;

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
`;
const CardInput = styled.input`
  padding: 7px 7px 7px 7px;
  width: 95%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-color: #777;
    outline: 0;
  }
`;

const CardText = styled.p`
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: left;
  font-family: inherit;
`;

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
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const ItemInputCard = ({ addItem, id }) => {
  // const { values, errors, change, disabled, submit } = props;
  console.log("this is not the droid you are looking for", id);

  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    description: "",
    location: "",
    user_id: id,
  });

  const onSubmit = (evt) => {
    evt.preventDefault();
    // submit(values);
    addItem(formValues);
  };

  const onChange = (e) => {
    // const { name, value } = evt.target;
    // change(name, value );
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <CardWrapper>
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardHeading>Add New Item</CardHeading>
        </CardHeader>
        <CardBody onSubmit={onSubmit}>
          <CardFieldset>
            <CardInput
              value={formValues.name}
              onChange={onChange}
              name="name"
              type="text"
              placeholder="Item name"
            />
          </CardFieldset>
          {/* <CardText>{errors.item_name}</CardText> */}
          <CardFieldset>
            <CardInput
              value={formValues.price}
              onChange={onChange}
              name="price"
              type="text"
              placeholder="Price"
            />
          </CardFieldset>
          {/* <CardText>{errors.item_price}</CardText> */}
          <CardFieldset>
            <CardInput
              value={formValues.description}
              onChange={onChange}
              name="description"
              type="text"
              placeholder="Description"
            />
          </CardFieldset>
          {/* <CardText>{errors.item_description}</CardText> */}
          <CardFieldset>
            <CardInput
              value={formValues.location}
              onChange={onChange}
              name="location"
              type="text"
              placeholder="Location"
            />
          </CardFieldset>
          {/* <CardText>{errors.item_location}</CardText> */}
          <CardFieldset>
            <CardButton type="button">Register</CardButton>
          </CardFieldset>
        </CardBody>
      </form>
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};

export default connect(mapStateToProps, { addItem })(ItemInputCard);
