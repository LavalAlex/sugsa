import { upperRol } from './select'

export default function rolName(user) {
  
  if (!user[0]) return user;
  for (var i = 0; i < user.length; i++) {
    let rol = user[i].Rol;
    rol = upperRol(rol)
    if (Array.isArray(rol)) {
      let roles = "";
      for (var j = 0; j < rol.length; j++) {
        if (j === 0) {
          roles = rol[j];
        } else {
          roles = roles + " , " + rol[j];
        }
      }
      user[i].Rol = roles;
    }
  }
  return user;
}
