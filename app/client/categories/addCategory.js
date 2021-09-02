const axios = require("axios").default;
const addCategory = (req, res) => {
  axios
    .post("http://localhost:2000/api/categories", {
      category: !req.body.category ? "" : req.body.category,
    })
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = addCategory;
