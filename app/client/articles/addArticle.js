const axios = require("axios").default;

function addArticle(req, res) {
  const name = req.body.name;
  const category = req.body.category;
  const tags = req.body.tags;
  const content = req.body.content;
  const currentTime = new Date();

  axios
    .post("http://localhost:2000/api/articles", {
      name: name,
      category: category,
      tags: tags,
      year: currentTime.getFullYear(),
      month: currentTime.getMonth(),
      content: content,
    })
    .then((value) => {
      res.json({ response: value.data });
    });
}

module.exports = addArticle;
