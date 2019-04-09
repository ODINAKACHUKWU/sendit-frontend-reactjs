import axios from "axios";
import toast from "../../utils/toast";
import TYPES from "../constants";
import BASE_URL from "../../utils/constant";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import getUserId from "../../utils/getUserId";

const isCreating = bool => ({
  type: TYPES.IS_CREATING,
  bool,
});

const isFetching = bool => ({
  type: TYPES.IS_FETCHING,
  bool,
});

const isProcessing = bool => ({
  type: TYPES.IS_PROCESSING,
  bool,
});

const createParcelOrder = payload => ({
  type: TYPES.CREATE_PARCEL_ORDER,
  payload,
});

const fetchUserParcels = parcels => ({
  type: TYPES.FETCH_USER_PARCELS,
  parcels,
});

const fetchParcelDetails = parcel => ({
  type: TYPES.FETCH_PARCEL_DETAILS,
  parcel,
});

const updateDestination = destination => ({
  type: TYPES.UPDATE_DESTINATION,
  destination,
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

const getUserParcelsRequest = () => async (dispatch) => {
  dispatch(isFetching(true));
  try {
    const userId = getUserId.userId();
    const response = await axios.get(`${BASE_URL}/users/${userId}/parcels`, setAuthorizationToken.setToken());
    const { data, message } = response.data;
    dispatch(fetchUserParcels(data));
    toast.success(message);
  } catch (error) {
    const errorMessage = error.response.data.message;
    toast.error(errorMessage);
  } finally {
    dispatch(isFetching(false));
  }
};

const getUsersParcelDetails = parcelId => async (dispatch) => {
  dispatch(isProcessing(true));
  try {
    const response = await axios.get(`${BASE_URL}/parcels/${parcelId}`, setAuthorizationToken.setToken());
    const { data, message } = response.data;
    dispatch(fetchParcelDetails(data));
    toast.success(message);
  } catch (error) {
    const errorMessage = error.response.data.message;
    toast.error(errorMessage);
  } finally {
    dispatch(isProcessing(false));
  }
};

const changeDestinationRequest = (updatedDestination, parcelId) => async (dispatch) => {
  dispatch(isProcessing(true));
  try {
    const response = await axios.put(
      `${BASE_URL}/parcels/${parcelId}/destination`,
      updatedDestination,
      setAuthorizationToken.setToken(),
    );
    const { data: { destination }, message } = response.data;
    dispatch(updateDestination(destination));
    toast.success(message);
  } catch (error) {
    const errorMessage = error.response.data.message;
    toast.error(errorMessage);
  } finally {
    dispatch(isProcessing(false));
  }
};

export {
  createOrderRequest, getUserParcelsRequest, getUsersParcelDetails, changeDestinationRequest,
};
