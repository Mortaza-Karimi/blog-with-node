import axios from "../axios";
const showArticle = (article) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/article/${article}`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showArticle;
