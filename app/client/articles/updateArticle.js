const axios = require("../../../lib/axios");
const updateArticle = (name = "", category = "", tags = "", content = "") => {
  const currentTime = new Date();
  axios
    .put("/api/articles", {
      name: name,
      category: category,
      tags: tags,
      year: currentTime.getFullYear(),
      month: currentTime.getMonth(),
      content: content,
    })
    .then((value) => {
      return { response: value.data };
    });
};
module.exports = updateArticle;
