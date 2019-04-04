import TYPES from "../actions/constants";

const initialState = {
  isFetching: false,
  payload: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TYPES.IS_FETCHING:
    return {
      ...state,
      isFetching: action.bool,
    };
  case TYPES.SET_USER_OVERVIEW:
    return {
      ...state,
      payload: action.payload,
    };
  default:
    return state;
  }
};
