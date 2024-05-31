import axios from "axios";
const API_URL = "/api/auth";

const register = async (formData) => {
  const response = await axios.post("https://e-backend-zjo7.onrender.com/api/auth/register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post("https://e-backend-zjo7.onrender.com/api/auth/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const authService = {
  login,
  register,
};

export default authService;
