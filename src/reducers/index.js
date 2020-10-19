import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  FETCH_ITEM_START,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  EDIT_ITEM_START,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILURE,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from "../actions/index";

const initialState = {
  id: "",
  name: "",
  description: "",
  price: "",
  location: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
      };
    case LOGIN_START:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
    case ADD_ITEM_START:
      return {
        ...state,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
      };
    case FETCH_ITEM_START:
      return {
        ...state,
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
      };
    case EDIT_ITEM_START:
      return {
        ...state,
      };
    case EDIT_ITEM_SUCCESS:
      return {
        ...state,
      };
    case EDIT_ITEM_FAILURE:
      return {
        ...state,
      };
    case DELETE_ITEM_START:
      return {
        ...state,
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
