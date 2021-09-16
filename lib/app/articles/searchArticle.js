import axios from "../axios";
const searchArticle = (q) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/articles/?q=${q}`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default searchArticle;
