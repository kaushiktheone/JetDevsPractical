import {
  setLoading,
  setLoader,
  setUsers,
  updateUsers,
} from '../slices/userSlice';
import * as apiHandler from './api';

export const fetchUserList = pageNo => {
  return async dispatch => {
    if (pageNo > 1) {
      dispatch(setLoader(true));
    } else {
      dispatch(setLoading(true));
    }

    const response = await apiHandler.fetchUserList(pageNo);

    if (pageNo > 1) {
      dispatch(updateUsers(response));
    } else {
      dispatch(setUsers(response));
    }
  };
};
