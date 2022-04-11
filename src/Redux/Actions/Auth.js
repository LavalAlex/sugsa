import axios from "axios";
import { LOGIN_ADMIN, LOGOUT_ADMIN } from "./ActionsTypes";

const URL = "http://181.15.255.130:3001/api/auth";

export function loginAdmin(admin) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URL, admin);
      dispatch({ type: LOGIN_ADMIN, payload: response });
    } catch (e) {
      console.log(e);
    }
  };
}

export function logoutAdmin() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_ADMIN,
      payload: {},
    });
  };
}
