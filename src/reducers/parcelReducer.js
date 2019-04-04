import TYPES from "../actions/constants";

const initialState = {
  isCreating: false,
  payload: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TYPES.IS_CREATING:
    return {
      ...state,
      isCreating: action.bool,
    };
  case TYPES.CREATE_PARCEL_ORDER:
    return {
      ...state,
      payload: action.payload,
    };
  default:
    return state;
  }
};
