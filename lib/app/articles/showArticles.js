import axios from "../axios";
import searchArticle from "./searchArticle";
const showArticles = (q) => {
  if (q) {
    searchArticle(q);
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .get("/api/articles")
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
    // or //
  });
};
export default showArticles;
