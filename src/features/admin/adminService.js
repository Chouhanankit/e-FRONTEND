import axios from "axios";

const API_URL = "/api/admin";

const getUsers = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/users", option);
  return response.data;
};

const getDatas = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/datas", option);
  return response.data;
};

const adminService = {
  getUsers,
  getDatas,
};

export default adminService;
