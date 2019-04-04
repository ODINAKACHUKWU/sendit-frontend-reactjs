import axios from "axios";
import toast from "../../utils/toast";
import TYPES from "../constants";
import BASE_URL from "../../utils/constant";
import jwt from "../../utils/jwt";

const isProcessing = bool => ({
  type: TYPES.IS_PROCESSING,
  bool,
});

const userAuthSuccess = user => ({
  type: TYPES.USER_AUTH_SUCCESS,
  user,
});

const userAuthFailure = error => ({
  type: TYPES.USER_AUTH_FAILURE,
  error,
});

const logoutUser = () => ({
  type: TYPES.USER_LOGOUT,
});

const userAuthRequest = userData => async (dispatch) => {
  const authPath = Object.keys(userData).includes("firstName")
    ? "/signup"
    : "/login";
  dispatch(isProcessing(true));
  try {
    const response = await axios.post(`${BASE_URL}/auth${authPath}`, userData);
    const { token, message } = response.data;
    localStorage.setItem("token", token);
    toast.success(message);
    const user = jwt.decode(token);
    dispatch(userAuthSuccess(user));
  } catch (error) {
    const errorMessage = error.response.data.message;
    toast.error(errorMessage);
    dispatch(userAuthFailure(errorMessage));
  } finally {
    dispatch(isProcessing(false));
  }
};

const userLogOutRequest = () => async (dispatch) => {
  try {
    dispatch(isProcessing(true));
    dispatch(logoutUser());
    const items = ["token", "Small", "Medium", "Large"];
    items.map(item => localStorage.removeItem(item));
    toast.success("You are now logged out");
  } catch (error) {
    dispatch(userAuthFailure(error));
    toast.error(error);
  } finally {
    dispatch(isProcessing(false));
  }
};

export { userAuthSuccess, userAuthRequest, userLogOutRequest };
