const axios = require("axios").default;
const updateArticle = (req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const tags = req.body.tags;
  const content = req.body.content;
  const currentTime = new Date();
  axios
    .put("http://localhost:2000/api/articles", {
      name: !name ? "" : name,
      category: !category ? "" : category,
      tags: !tags ? "" : tags,
      year: currentTime.getFullYear(),
      month: currentTime.getMonth(),
      content: !content ? "" : content,
    })
    .then((value) => {
      res.json({ response: value.data });
    });
};
module.exports = updateArticle;
