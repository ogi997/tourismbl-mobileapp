import base from "./base.service";

const instance = base.service(true);
const PREFIX_URL = "admin-panel/location";

export const getAllLocations = () => {
  return instance
    .get(`${PREFIX_URL}/get-all-locations/`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const getLocationById = (id) => {
  return instance
    .get(`${PREFIX_URL}/get-location/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const activeLocationById = (id) => {
  return instance
    .patch(`${PREFIX_URL}/toggle-active-location/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const deleteLocationById = (id) => {
  return instance
    .delete(`${PREFIX_URL}/delete-location/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const updateLocationById = (id) => {
  return instance
    .put(`${PREFIX_URL}/update/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

const adminLocation = {
  getAllLocations,
  getLocationById,
  activeLocationById,
  deleteLocationById,
  updateLocationById,
};

export default adminLocation;
