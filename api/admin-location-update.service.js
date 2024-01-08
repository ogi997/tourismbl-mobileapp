import base from "./base.service";

const instance = base.service(true);
const PREFIX_URL = "admin-panel/update-location";

export const getAllLocationUpdateRequest = () => {
  return instance
    .get(`${PREFIX_URL}/get-all-location-requests/`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const getLocationUpdateRequestById = (id) => {
  return instance
    .get(`${PREFIX_URL}/get-update-location-request/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const deleteLocationUpdateRequestById = (id) => {
  return instance
    .delete(`${PREFIX_URL}/delete-update-location-request/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

const adminLocationUpdate = {
  getAllLocationUpdateRequest,
  getLocationUpdateRequestById,
  deleteLocationUpdateRequestById,
};

export default adminLocationUpdate;
