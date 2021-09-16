import axios from "../axios";
const updateArticle = (OLDname, name, category, tags, content) => {
  const currentTime = new Date();

  return new Promise((resolve, reject) => {
    axios
      .put("/api/articles", {
        OLDname: OLDname,
        name: name,
        category: category,
        tags: tags,
        year: currentTime.getFullYear(),
        month: currentTime.getMonth(),
        content: content,
      })
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default updateArticle;
