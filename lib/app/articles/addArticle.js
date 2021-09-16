import axios from "../axios";

function addArticle(name, category, tags, content) {
  const currentTime = new Date();

  return new Promise((resolve, reject) => {
    axios
      .post("/api/articles", {
        name: name,
        category: category,
        tags: tags,
        year: currentTime.getFullYear(),
        month: currentTime.getMonth(),
        day: currentTime.getDay(),
        content: content,
      })
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export default addArticle;
