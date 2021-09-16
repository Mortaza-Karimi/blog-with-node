import axios from "../axios";
const showByTag = (tag) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/tags/${tag}`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showByTag;
