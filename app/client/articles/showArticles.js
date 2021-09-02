const axios = require("../../../lib/axios");
const searchArticle = require("./searchArticle");
const showArticles = (q) => {
  if (q) {
    searchArticle(q);
    return;
  }
  axios.get("/api/articles").then((value) => {
    return { response: value.data };
  });
};
module.exports = showArticles;
