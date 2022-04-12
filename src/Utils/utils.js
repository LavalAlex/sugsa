export const objNewUser = ({ name, email, password, moduls, rol }) => {
  const newUser = {
    name,
    email,
    password,
    rol: {
      moduls,
      rol,
    },
  };
  return newUser;
};
