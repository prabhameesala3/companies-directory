// import axios from "axios";

// export const fetchCompanies = async () => {
//   const res = await axios.get("/companies.json");
//   return res.data;
// };

import axios from "axios";

export const fetchCompanies = async () => {
  const res = await axios.get("/companies.json");
  return res.data;
};
