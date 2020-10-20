import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://african-market-api.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};

//UPDATE LOCAL HOST TO PROPERLY USE THE BACKEND API
