import axios from "axios";
import { ALL_USERS, NEW_USER } from "./ActionsTypes";
const URL = "http://181.15.255.130:3001/api/auth/userall";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDFmZmNiODM5YjU4MjNjZjliODIzNCIsIm5hbWUiOiJKb3JnZSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sIjp7Im1vZHVsIjoiUE8iLCJyb2xlcyI6WyJnZXJlbnRlVFJBRiJdfSwiaWF0IjoxNjQ5NDY4OTYxLCJleHAiOjE2NDk1NTUzNjF9.3UdpMdDdvEBtfFt8Aj3xBuImX8C694L-MAQoZ2gcE7M"

export function allUsers(token) {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: ALL_USERS, payload: response });
    } catch (e) {
      console.log(e.message);
    }
  };
}

const URLNEWUSER = "http://181.15.255.130:3001/api/auth/new";

export function createUser(user) {
  return async (dispatch) => {
    try {
      const response = await axios.post(URLNEWUSER, user);
      dispatch({ type: NEW_USER, payload: response });
    } catch (e) {
      console.log(e.message)
    }
  };
}
