const axios = require("../../../lib/axios");
const addCategory = (category) => {
  axios
    .post("/api/categories", {
      category: category,
    })
    .then((value) => {
      return { response: value.data };
    });
};
module.exports = addCategory;
