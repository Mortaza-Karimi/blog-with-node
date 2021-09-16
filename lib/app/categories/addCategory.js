import axios from "../axios";
const addCategory = (category) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/categories", {
        category: category,
      })
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default addCategory;
