import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import ItemInputCard from "./ItemInputCard";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import img from "./marketplace.png";
import schema from "./schema";
import { connect } from "react-redux";
import { fetchItems } from "./actions/index";

const itemsURL = "http://localhost:3333/";

const DashboardContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  margin: auto;
  font-family: QuickSand, arial, sans-serif;
  background-image: url(${img});
  background-size: 100%;
  height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  border: 1px solid purple;
  margin: 24px;
  font-family: QuickSand, arial, sans-serif;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: white;
  letter-spacing: 3px;
  text-shadow: 2px 2px black;
`;

const initialFormValues = {
  item_name: "",
  item_price: "",
  item_description: "",
  item_location: "",
};

const initialFormErrors = {
  item_name: "",
  item_price: "",
  item_description: "",
  item_location: "",
};

const initialDisabled = true;

const Dashboard = ({ products, fetchItems, isLoading }) => {
  const [items, setItems] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const getItems = () => {
  //   axios
  //     .get(itemsURL)
  //     .then((res) => {
  //       setItems(res.data);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  const postNewItem = (newItem) => {
    axios
      .post(itemsURL, newItem)
      .then((res) => {
        setItems([res.data, ...items]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newItem = {
      item_name: formValues.item_name.trim(),
      item_price: formValues.item_price,
      item_description: formValues.item_description.trim(),
      item_location: formValues.item_location.trim(),
    };

    postNewItem(newItem);
  };

  const resetForm = () => setFormValues(initialFormValues);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <DashboardContainer>
      <Heading>
        <Heading>Marketplace Listings</Heading>
      </Heading>

      <CardContainer>
        {isLoading
          ? "Loading..."
          : products.map((item) => {
              return <ItemCard key={item.id} details={item} />;
            })}

        <ItemInputCard
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          reset={resetForm}
          disable={disabled}
          errors={formErrors}
        />
      </CardContainer>
    </DashboardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchItems })(Dashboard);
