const axios = require("axios").default;
const showCategories = (req, res) => {
  axios.get("http://localhost:2000/api/categories").then((value) => {
    res.json({ response: value.data });
  });
};
module.exports = showCategories;
