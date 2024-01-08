import base from "./base.service";

const instance = base.service(true);
const PREFIX_URL = "locations";

export const createLocation = (value) => {
  return instance
    .post(`${PREFIX_URL}/location-create/`, value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const getAllLocations = (category) => {
  return instance
    .get(`${PREFIX_URL}/get-all-locations-by-category/?category=${category}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const getLocationById = (id) => {
  return instance
    .get(`${PREFIX_URL}/get-location/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const deleteLocationById = (id) => {
  return instance
    .delete(`${PREFIX_URL}/delete/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

const locations = {
  createLocation,
  getAllLocations,
  getLocationById,
  deleteLocationById,
};

export default locations;
