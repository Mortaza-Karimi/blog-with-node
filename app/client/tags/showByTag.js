const axios = require("axios").default;
const showByTag = (req, res) => {
  axios
    .get(`http://localhost:2000/api/tags/${req.params.tag}`)
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = showByTag;
