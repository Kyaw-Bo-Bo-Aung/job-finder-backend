const qs = require("querystring");
const { get } = require("./apiService");
const { API_URL, API_KEY } = require("./../config");
const { getCategories } = require("./categoryService");
const logger = require("../logger");

const baseUrl = API_URL + "jobs";
const firstPage = 0;
const defaultCategories = getCategories();

const getJobs = async (page = firstPage, category = defaultCategories, searchQuery) => {
  const response = await get(baseUrl, {
    params: { api_key: API_KEY ,page, category, ...searchQuery },
    paramsSerializer: (params) => {
      const queryParams = qs.stringify(params);
      logger.info("requested url: " + baseUrl + queryParams);
      return queryParams;
    }
  });

  return response.data;
};

module.exports = { getJobs };
