const axios = require("axios").default;
const showArticle = (req, res) => {
  axios
    .get(`http://localhost:2000/api/article/${req.params.article}`)
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = showArticle;
