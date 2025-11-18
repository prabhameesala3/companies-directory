<<<<<<< HEAD
import axios from "axios";

export const fetchCompanies = async () => {
  const res = await axios.get("/companies.json");
  return res.data;
};
=======
import axios from "axios";

export const fetchCompanies = async () => {
  const res = await axios.get("/companies.json");
  return res.data;
};
>>>>>>> 3397770c9566504f8862592cc036956adddc942c
