const axios = require("../../../lib/axios");
const searchArticle = (q) => {
  axios.get(`/api/articles/?q=${q}`).then((value) => {
    return { response: value.data };
  });
};
module.exports = searchArticle;
