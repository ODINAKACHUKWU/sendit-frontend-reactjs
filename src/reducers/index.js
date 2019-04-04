import { combineReducers } from "redux";
import authReducer from "./authReducer";
import overviewReducer from "./overviewReducer";
import parcelReducer from "./parcelReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  overView: overviewReducer,
  parcel: parcelReducer,
});

export default rootReducer;
