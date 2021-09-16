import axios from "../axios";
const showByMonth = (year, month) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/years/${year}/${month}`)
      .then((value) => {
        resolve(value.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default showByMonth;
