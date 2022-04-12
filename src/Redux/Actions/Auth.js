import axios from "axios";
import { LOGIN_ADMIN, LOGOUT_ADMIN, URLLOGIN } from "./ActionsTypes";



export function loginAdmin(admin) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URLLOGIN, admin);
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
