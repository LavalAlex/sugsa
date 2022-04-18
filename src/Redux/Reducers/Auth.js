import Cookie from "universal-cookie";
import { saveLocal } from "../../Utils/storage";
import { LOGIN_ADMIN, LOGOUT_ADMIN } from "../Actions/ActionsTypes";
const cookie = new Cookie();
const initialState = cookie.get("susa_admin") || {};

export default function root(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ADMIN: 
      saveLocal("susa_admin", action.payload.data);
      cookie.set("susa_admin", action.payload.data);
      return cookie.get("susa_admin");
      
    case LOGOUT_ADMIN:
      cookie.remove("susa_admin");
      return {};

    default:
      return state;
  }
}
