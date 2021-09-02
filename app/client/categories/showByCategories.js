const axios = require("../../../lib/axios");
const showByCategories = (category) => {
  axios.get(`/api/categories/${category}`).then((value) => {
    return { response: value.data };
  });
};
module.exports = showByCategories;
