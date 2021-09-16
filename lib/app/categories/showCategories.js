import axios from "../axios";
const showCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/categories")
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showCategories;
