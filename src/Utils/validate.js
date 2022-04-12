const validateNewUser = ({ password, name, rol, moduls }) => {
  if (!rol) return { rol: "Error, you must select a role" };

  if (name.length < 4) {
    return { name: "Error, The name must be at least 4 characters" };
  }

  if (password.length < 6)
    return {
      password: "Error, The password must be at least 6 characters",
    };

  if (!moduls) return { moduls: "Error, You must place a moduls" };
  return {};
};

const validateNewPassword= ({password})=>{
  if (password.length < 6)
  return {
    error: "Error, The password must be at least 6 characters",
  };
  return {}
} 
module.exports = {
  validateNewUser,
  validateNewPassword
};
