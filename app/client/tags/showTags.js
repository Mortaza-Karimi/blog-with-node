const axios = require("axios").default;
const showTags = (req, res) => {
  axios.get("http://localhost:2000/api/tags").then((value) => {
    res.json({ response: value.data });
  });
};
module.exports = showTags;
