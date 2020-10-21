import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard'
import ItemInputCard from './ItemInputCard'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
import img from '../assets/marketplace.png'
import schema from './schema'


const itemsURL = 'http://localhost:3333/'

const DashboardContainer = styled.div`
    display: flex;
    flex-flow: column;
    max-width: 100%;
    margin: auto;
    font-family: QuickSand, arial, sans-serif;
    background-image: url(${img});
    background-repeat: repeat-y;
    background-size: 100%;

    
  `

const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width:100%;
    justify-content: space-evenly;
    margin: 24px;
    font-family: QuickSand, arial, sans-serif;
  `

const Heading = styled.h2`
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    color: white;
    letter-spacing: 3px;
    text-shadow: 2px 2px black;
    `

const initialFormValues = {
    item_name: '',
    item_price: '',
    item_description: '',
    item_location: '',
};

const initialFormErrors = {
    item_name: '',
    item_price: '',
    item_description: '',
    item_location: '',
};

const initialItems = [];
const initialDisabled = true;

export default function Dashboard() {

    const [items, setItems] = useState(initialItems)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const getItems = () => {
        axios
          .get(itemsURL)
          .then((res) => {
            setItems(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const postNewItem = (newItem) => {
        axios
          .post(itemsURL, newItem)
          .then((res) => {
            setItems([res.data, ...items]);
            setFormValues(initialFormValues);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const inputChange = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({ ...formErrors, [name]: "", });
        })
        .catch((err) => {
          setFormErrors({ ...formErrors, [name]: err.errors[0], });
        });
      setFormValues({ ...formValues, [name]: value, });
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

    
    useEffect(() => {
        getItems();
      }, []);

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
        {items.map((item) => {
            return <ItemCard key={item.id} details={item} />;
        })}

        <ItemInputCard
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disable={disabled}
            errors={formErrors}
            />
        </CardContainer>
    </DashboardContainer>
    )

}