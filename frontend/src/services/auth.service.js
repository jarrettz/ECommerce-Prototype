import api from '../api';

const register = (username, password) => {
  return api.post("auth/signup",
  {
    username,
    password,
  });
};

const login = (username, password) => {
  return api.post("auth/login", 
    {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};