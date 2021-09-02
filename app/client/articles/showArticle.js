const axios = require("../../../lib/axios");
const showArticle = (article) => {
  axios.get(`/api/article/${article}`).then((value) => {
    return { response: value.data };
  });
};
module.exports = showArticle;
