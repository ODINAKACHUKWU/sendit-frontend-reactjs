import axios from "axios";
import toast from "../../utils/toast";
import TYPES from "../constants";
import BASE_URL from "../../utils/constant";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import getUserId from "../../utils/getUserId";

const isFetching = bool => ({
  type: TYPES.IS_FETCHING,
  bool,
});

const setUserOverview = payload => ({
  type: TYPES.SET_USER_OVERVIEW,
  payload,
});

const userOverviewRequest = () => async (dispatch) => {
  dispatch(isFetching(true));
  try {
    const userId = getUserId.userId();
    const resTotalParcel = await axios.get(`${BASE_URL}/users/${userId}/all`, setAuthorizationToken.setToken());
    const resDeliveredParcel = await axios.get(`${BASE_URL}/users/${userId}/deliver`, setAuthorizationToken.setToken());
    const resPendingParcel = await axios.get(`${BASE_URL}/users/${userId}/pending`, setAuthorizationToken.setToken());
    const totalParcelOrder = resTotalParcel.data.data;
    const totalDeliveredParcel = resDeliveredParcel.data.data;
    const totalPendingParcel = resPendingParcel.data.data;
    dispatch(setUserOverview({ totalParcelOrder, totalDeliveredParcel, totalPendingParcel }));
  } catch (error) {
    const errorMessage = error.response.data.message;
    toast.error(errorMessage);
  } finally {
    dispatch(isFetching(false));
  }
};

export default userOverviewRequest;
