import base from "./base.service";

const instance = base.service(true);
const PREFIX_URL = "location-update";

export const createUpdateRequest = (value) => {
  return instance
    .post(`${PREFIX_URL}/request/`, value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const checkIfRequestExist = (id) => {
  return instance
    .get(`${PREFIX_URL}/check-if-request-exist/${id}`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

const locationUpdateRequest = {
  createUpdateRequest,
  checkIfRequestExist,
};

export default locationUpdateRequest;
