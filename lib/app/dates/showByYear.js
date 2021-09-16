import axios from "../axios";
const showByYear = (year) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/years/${year}`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showByYear;
