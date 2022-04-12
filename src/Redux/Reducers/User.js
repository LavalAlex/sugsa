import {
  ALL_ROLES,
  ALL_USERS,
  NEW_PASSWORD,
  NEW_USER,
} from "../Actions/ActionsTypes";

const initialState = {
  users: [],
  roles: [],
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case NEW_USER:
      return {
        ...state,
      };
    case ALL_ROLES:
      return {
        ...state,
        roles: action.payload,
      };

    case NEW_PASSWORD:
      return {
        ...state,
      };
    default:
      return state;
  }
}
