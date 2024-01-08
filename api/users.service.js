import AsyncStorage from "@react-native-async-storage/async-storage";
import base from "./base.service";

const instance = base.service(false);
const PREFIX_URL = "users";

export const login = (username, password) => {
  return instance
    .post(`${PREFIX_URL}/login/`, { username, password })
    .then(async (res) => {
      const { access } = res.data;
      await AsyncStorage.setItem("token", access);
      return res.data;
    })
    .catch((error) => Promise.reject(error.response.status));
};

export const register = (value) => {
  return instance
    .post(`${PREFIX_URL}/register/`, value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => result.data)
    .catch((error) => Promise.reject(error.response.status));
};

export const logout = () => {
  try {
    AsyncStorage.removeItem("token").then((res) => res);
  } catch (error) {
    return Promise.reject(error);
  }
};

const users = {
  login,
  register,
  logout,
};

export default users;
