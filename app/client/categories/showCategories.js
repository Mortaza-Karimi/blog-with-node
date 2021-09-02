const axios = require("../../../lib/axios");
const showCategories = () => {
  axios.get("/api/categories").then((value) => {
    return { response: value.data };
  });
};
module.exports = showCategories;
