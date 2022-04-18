// import { isArray } from "react-select/dist/declarations/src/utils";

export default function rolName(rol) {
  if (Array.isArray(rol)) {
    let roles = "";
    for (var i = 0; i < rol.length; i++) {
      if (i === 0) {
        roles = rol[i];
      } else {
        roles = roles + " - " + rol[i];
      }
    }
    return roles
  }else{
      return rol
  }
}
