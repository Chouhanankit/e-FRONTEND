import axios from "axios";

const getproduct = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get("https://e-backend-zjo7.onrender.com/api/product", option);
  // console.log(res);
  return res.data;
};

const getSingleProduct = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(
    "https://e-backend-zjo7.onrender.com/api/product/" + id,
    option
  );
  // console.log(res);
  return res.data;
};

const getProductDelete = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(
    "https://e-backend-zjo7.onrender.com/api/product/" + id,
    option
  );
  // console.log(res);
  return res.data;
};

const productService = {
  getproduct,
  getSingleProduct,
  getProductDelete,
};

export default productService;
