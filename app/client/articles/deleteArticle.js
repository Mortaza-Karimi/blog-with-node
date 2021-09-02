const axios = require("axios").default;
const deleteArticle = (req, res) => {
  axios
    .delete(`http://localhost:2000/api/articles/${req.params.article}`)
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = deleteArticle;
