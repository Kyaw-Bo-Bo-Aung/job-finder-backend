const axios = require("axios");
const logger = require("../logger");

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) logger.error("Unexpected error! : " + error);

  return Promise.reject(error.response.data || error);
});

module.exports = {
  get: axios.get,
};
