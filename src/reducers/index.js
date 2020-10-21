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
  products: [],
  product: {},
  error: "",
  isLoading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.payload.id,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "error",
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
        isLoading: true,
      };
    case ADD_ITEM_SUCCESS:
      console.log("justin", action.payload);
      return {
        ...state,
        isLoading: false,
        products: [...state.products, action.payload],
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Adding item failure",
      };
    case FETCH_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ITEM_SUCCESS:
      console.log("payload", action.payload);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "fetch item is fecked",
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
        isLoading: true,
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        products: state.products.filter((items) => items.id !== action.payload),
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
