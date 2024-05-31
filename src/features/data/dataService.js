import axios from "axios";

const API_URL = "/api/data";

// GET ALL dataS
const getDatas = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, option);
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
  const response = await axios.get(API_URL + "/" + id, option);
  return response.data;
};

// CLOSE data
const closeData = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + "/" + id, option);
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
  const response = await axios.post(API_URL, formdata, option);
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
