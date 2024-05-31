import axios from "axios";

const API_URL = "/api/data";

// GET ALL dataS
const getDatas = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("https://e-backend-zjo7.onrender.com", option);
  return response.data;
  //   console.log(response);
};

// // GET SINGLE data
const getData = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // console.log(id);
  const response = await axios.get("https://e-backend-zjo7.onrender.com/" + id, option);
  return response.data;
};

// CLOSE data
const closeData = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete("https://e-backend-zjo7.onrender.com/" + id, option);
  window.location.reload();
  return response.data;
};

// // CREATE data
const createData = async (formdata, token) => {
  // console.log(formdata);
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("https://e-backend-zjo7.onrender.com", formdata, option);
  // console.log(response.data);
  return response.data;
};

const dataService = {
  getDatas,
  getData,
  closeData,
  createData,
};

export default dataService;
