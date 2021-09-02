const axios = require("axios").default;
const showByCategories = (req, res) => {
  axios
    .get(`http://localhost:2000/api/categories/${req.params.category}`)
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = showByCategories;
