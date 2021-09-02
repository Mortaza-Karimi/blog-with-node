const axios = require("axios").default;
const searchArticle = require("./searchArticle");
const showArticles = (req, res) => {
  if (req.query.q) {
    searchArticle(req, res);
    return;
  }
  axios.get("http://localhost:2000/api/articles").then((value) => {
    res.json({ response: value.data });
  });
};
module.exports = showArticles;
