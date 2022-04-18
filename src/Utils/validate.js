const validateNewUser = ({ password, name, rol, moduls, email }) => {
  if (!name) return { name: "Error, You must provider a name" };
  if (name.length < 4) {
    return { name: "Error, The name must be at least 4 characters" };
  }

  if (!email) return { email: "Error, You must provider an email" };
  if (email) {
    const validate = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!validate) {
      return { email: "Error, Is not an email" };
    }
  }

  if (!password) return { password: "Error, You must provider a password" };
  if (password.length < 6)
    return {
      password: "Error, The password must be at least 6 characters",
    };

  if (!moduls) return { moduls: "Error, You must place a moduls" };
  if (!rol) return { rol: "Error, you must select a role" };

  return {};
};

const validateNewPassword = ({ password }) => {
  if (!password) return { error: "Error, You must provider a password" };
  if (password.length < 6)
    return {
      error: "Error, The password must be at least 6 characters",
    };
  return {};
};

const validateLogin = ({ email, password }) => {
  if (!email) return { email: "Error, You must provider an email" };
  if (email) {
    const validate = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!validate) {
      return { email: "Error, Is not an email" };
    }
  }

  if (!password) return { password: "Error, You must provider a password" };
  if (password.length < 6)
    return {
      password: "Error, The password must be at least 6 characters",
    };
  return {};
};
module.exports = {
  validateNewUser,
  validateNewPassword,
  validateLogin,
};
