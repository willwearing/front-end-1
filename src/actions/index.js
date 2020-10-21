import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const signUp = (user) => (dispatch) => {
  dispatch({ type: SIGN_UP_START });
  axios
    .post("https://lbs-african-marketplace.herokuapp.com/auth/register", user)
    .then((res) => {
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
      console.log("looking for id", res.data);
    })
    .catch((err) => {
      console.log("sign up form axios", err);
      dispatch({ type: SIGN_UP_FAILURE, payload: err.response });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = (action) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/auth/login", action.formValues)
    .then((res) => {
      window.localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      action.history.push("/dashboard");
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const ADD_ITEM_START = "ADD_ITEM_START";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";
export const addItem = (item) => (dispatch) => {
  dispatch({ type: ADD_ITEM_START });
  return axiosWithAuth()
    .post("/items/additem", item)
    .then((res) => {
      dispatch({ type: ADD_ITEM_START, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ITEM_FAILURE, payload: err.response });
    });
};

export const FETCH_ITEM_START = "FETCH_ITEM_START";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE";
export const fetchItems = () => (dispatch) => {
  dispatch({ type: FETCH_ITEM_START });
  return axiosWithAuth()
    .get("/items")
    .then((res) => {
      dispatch({ type: FETCH_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ITEM_FAILURE, payload: err.response });
    });
};

export const EDIT_ITEM_START = "EDIT_ITEM_START";
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS";
export const EDIT_ITEM_FAILURE = "EDIT_ITEM_FAILURE";
export const editItem = (items) => (dispatch) => {
  dispatch({ type: EDIT_ITEM_START });
  return axiosWithAuth()
    .put(`/items/${items.id}`, items)
    .then((res) => {
      dispatch({ type: EDIT_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: EDIT_ITEM_FAILURE, payload: err.response });
    });
};

export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";
export const deleteItem = (item) => (dispatch) => {
  dispatch({ DELETE_ITEM_START });
  return axiosWithAuth()
    .post("/items", item)
    .then((res) => {
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_ITEM_FAILURE, payload: err.response });
    });
};
