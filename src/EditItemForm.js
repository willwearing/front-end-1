import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { editItem, fetchItemDetail } from "./actions/index";
import { useHistory, useParams } from "react-router-dom";

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

const EditItemForm = ({ product, isLoading, editItem, fetchItemDetail }) => {
  const [formValues, setFormValues] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    location: product.location,
    id: product.id,
  });

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fetchItemDetail(id);
  }, [fetchItemDetail, id]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    editItem(formValues);
    history.push("/dashboard");
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <CardWrapper>
      {isLoading ? (
        "Loading..."
      ) : (
        <form onSubmit={onSubmit}>
          <CardHeader>
            <CardHeading>Edit Item</CardHeading>
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

            <CardFieldset>
              <CardInput
                value={formValues.price}
                onChange={onChange}
                name="price"
                type="text"
                placeholder="Price"
              />
            </CardFieldset>

            <CardFieldset>
              <CardInput
                value={formValues.description}
                onChange={onChange}
                name="description"
                type="text"
                placeholder="Description"
              />
            </CardFieldset>

            <CardFieldset>
              <CardInput
                value={formValues.location}
                onChange={onChange}
                name="location"
                type="text"
                placeholder="Location"
              />
            </CardFieldset>

            <CardFieldset>
              <CardButton type="submit">Edit Item</CardButton>
            </CardFieldset>
          </CardBody>
        </form>
      )}
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { editItem, fetchItemDetail })(
  EditItemForm
);
