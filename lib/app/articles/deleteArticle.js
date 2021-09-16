import axios from "../axios";

const deleteArticle = (article) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`/api/articles/${article}`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export default deleteArticle;
