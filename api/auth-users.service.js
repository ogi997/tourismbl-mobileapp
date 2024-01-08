import base from "./base.service";

const instance = base.service(true);
const PREFIX_URL = "users";

export const getStatus = () => {
  return instance
    .get(`${PREFIX_URL}/status/`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const getUserById = (id) => {
  return instance
    .get(`${PREFIX_URL}/get-user/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const changeAvatar = (newAvatar) => {
  return instance
    .patch(`${PREFIX_URL}/change-user-avatar/`, newAvatar, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => result.data)
    .catch((error) => Promise.reject(error.response.status));
};

export const updateProfile = (value) => {
  return instance
    .put(`${PREFIX_URL}/change-user-data/`, value)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const updatePassword = (value) => {
  return instance
    .put(`${PREFIX_URL}/change-user-password/`, value)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

const authUsers = {
  getStatus,
  getUserById,
  changeAvatar,
  updateProfile,
  updatePassword,
};

export default authUsers;
