import base from "./base.service";

const instance = base.service(true);
const PREFIX_URL = "admin-panel/user";

export const getAllUsers = () => {
  return instance
    .get(`${PREFIX_URL}/get-all-users/`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const getUserById = (id) => {
  return instance
    .get(`${PREFIX_URL}/get-user/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const toggleActiveUserById = (id) => {
  return instance
    .patch(`${PREFIX_URL}/toggle-active-user/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const toggleAdminUserById = (id) => {
  return instance
    .patch(`${PREFIX_URL}/toggle-admin-user/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const deleteUser = (id) => {
  return instance
    .delete(`${PREFIX_URL}/delete-user/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

const adminUser = {
  getAllUsers,
  getUserById,
  toggleActiveUserById,
  toggleAdminUserById,
  deleteUser,
};

export default adminUser;
