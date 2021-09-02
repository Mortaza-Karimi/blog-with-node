const axios = require("axios").default;
const searchArticle = (req, res) => {
  axios
    .get(`http://localhost:2000/api/articles/?q=${req.query.q}`)
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = searchArticle;
