import base from "./base.service";

const instance = base.service(false);
const PREFIX_URL = "choices";

export const getCategories = () => {
  return instance
    .get(`${PREFIX_URL}/category-list/`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

export const getVisibilities = () => {
  return instance
    .get(`${PREFIX_URL}/visibility-list/`)
    .then((result) => result.data)
    .catch((error) => Promise.reject(error));
};

const choices = {
  getCategories,
  getVisibilities,
};

export default choices;
