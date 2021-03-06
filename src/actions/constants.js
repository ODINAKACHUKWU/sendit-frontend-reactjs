import keymirror from "keymirror";

const TYPES = keymirror({
  IS_PROCESSING: null,
  IS_FETCHING: null,
  USER_AUTH_SUCCESS: null,
  USER_AUTH_FAILURE: null,
  USER_LOGOUT: null,
  SET_USER_OVERVIEW: null,
  IS_CREATING: null,
  CREATE_PARCEL_ORDER: null,
  FETCH_USER_PARCELS: null,
  FETCH_PARCEL_DETAILS: null,
  UPDATE_DESTINATION: null,
  CANCEL_PARCEL_ORDER: null,
});

export default TYPES;
