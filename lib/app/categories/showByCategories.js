import axios from "../axios";
const showByCategories = (category) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/categories/${category}`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showByCategories;
