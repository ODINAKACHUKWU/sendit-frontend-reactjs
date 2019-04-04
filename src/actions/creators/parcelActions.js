import axios from "axios";
import toast from "../../utils/toast";
import TYPES from "../constants";
import BASE_URL from "../../utils/constant";
import setAuthorizationToken from "../../utils/setAuthorizationToken";

const isCreating = bool => ({
  type: TYPES.IS_CREATING,
  bool,
});

const createParcelOrder = payload => ({
  type: TYPES.CREATE_PARCEL_ORDER,
  payload,
});

const createOrderRequest = updatedParcelData => async (dispatch) => {
  dispatch(isCreating(true));
  try {
    const response = await axios.post(`${BASE_URL}/parcels`, updatedParcelData, setAuthorizationToken.setToken());
    const { data, message } = response.data;
    toast.success(message);
    dispatch(createParcelOrder(data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    toast.error(errorMessage);
  } finally {
    dispatch(isCreating(false));
  }
};

export default createOrderRequest;
