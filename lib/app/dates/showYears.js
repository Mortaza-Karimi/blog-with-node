import axios from "../axios";
const showYears = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/years`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showYears;
