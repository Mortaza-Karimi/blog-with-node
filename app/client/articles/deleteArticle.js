const axios = require("../../../lib/axios");
const deleteArticle = (article) => {
  axios.delete(`/api/articles/${article}`).then((value) => {
    return { response: value.data };
  });
};
module.exports = deleteArticle;
