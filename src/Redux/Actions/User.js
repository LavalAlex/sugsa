import axios from "axios";
import {
  ALL_ROLES,
  ALL_USERS,
  GET_USER_NAME,
  NEW_PASSWORD,
  NEW_USER,
  URLALLROLES,
  URLALLUSER,
  URLCREATEUSER,
  URLNEWPASSWORD,
} from "./ActionsTypes";

export function allUsers(token) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URLALLUSER, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: ALL_USERS, payload: data.usuariosAll });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function createUser(user) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URLCREATEUSER, user);
      dispatch({ type: NEW_USER, payload: response });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function allRoles(token) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URLALLROLES, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: ALL_ROLES, payload: data.roles });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function newPassword({ token, id, password }) {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${URLNEWPASSWORD}/${id}`,
        { password },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({ type: NEW_PASSWORD, payload: response });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function searchUser(name ) {
  return (dispatch) => {
    dispatch({ type: GET_USER_NAME, payload: name });
  };
}
