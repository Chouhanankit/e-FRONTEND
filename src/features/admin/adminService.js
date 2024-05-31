import axios from "axios";

const API_URL = "/api/admin";

const getUsers = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("https://e-backend-zjo7.onrender.com/api/users", option);
  return response.data;
};

const getDatas = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("https://e-backend-zjo7.onrender.com/api/users/datas", option);
  return response.data;
};

const adminService = {
  getUsers,
  getDatas,
};

export default adminService;
