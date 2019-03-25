import isEmpty from "is-empty";
import TYPES from "../actions/constants";

const initialState = {
  isAuthenticated: false,
  isProcessing: false,
  user: {},
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TYPES.IS_PROCESSING:
    return {
      ...state,
      isProcessing: action.bool,
    };
  case TYPES.USER_AUTH_SUCCESS:
    return {
      ...state,
      isAuthenticated: !isEmpty(action.user),
      user: action.user,
      error: "",
    };
  case TYPES.USER_AUTH_FAILURE:
    return {
      ...state,
      error: action.error,
      user: {},
    };
  case TYPES.USER_LOGOUT:
    return {
      ...state,
      isAuthenticated: false,
    };
  default:
    return state;
  }
};
