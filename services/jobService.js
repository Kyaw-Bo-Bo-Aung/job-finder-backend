const qs = require("querystring");
const { get } = require("./apiService");
const { API_URL, API_KEY } = require("./../config");
const { getCategories } = require("./categoryService");

const baseUrl = API_URL + "jobs";
const firstPage = 0;
const defaultCategories = getCategories();

const getJobs = async (page = firstPage, category = defaultCategories, searchQuery) => {
  const response = await get(baseUrl, {
    params: { api_key: API_KEY ,page, category, ...searchQuery },
    paramsSerializer: (params) => {
      console.log(qs.stringify(params))
      return qs.stringify(params)
    }
  });

  return response.data;
};

module.exports = { getJobs };
