const initialState = {
  players: [],
  isFetching: false,
  error: "",
};

const FETCH_START = "FETCH_START"; //to be deleted later

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    default:
      return state;
  }
};
