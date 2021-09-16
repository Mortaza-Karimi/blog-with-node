import axios from "../axios";
const showTags = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/tags")
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showTags;
