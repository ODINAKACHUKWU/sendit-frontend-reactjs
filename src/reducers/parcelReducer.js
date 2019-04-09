import TYPES from "../actions/constants";

const initialState = {
  isCreating: false,
  isFetching: false,
  isProcessing: false,
  payload: {},
  parcels: [],
  parcel: {},
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
  case TYPES.IS_FETCHING:
    return {
      ...state,
      isFetching: action.bool,
    };
  case TYPES.IS_PROCESSING:
    return {
      ...state,
      isProcessing: action.bool,
    };
  case TYPES.FETCH_USER_PARCELS:
    return {
      ...state,
      parcels: action.parcels,
    };
  case TYPES.FETCH_PARCEL_DETAILS:
    return {
      ...state,
      parcel: action.parcel,
    };
  default:
    return state;
  }
};
