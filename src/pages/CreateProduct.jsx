import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/Buttons";

const CreateProduct = () => {
  const { user } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  // add user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("photo", file);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", price);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    };
    const res = await axios.post(
      "https://e-backend-zjo7.onrender.com/api/admin/createpost",
      formData,
      config
    );
    console.log(res);
    if (!res.data) {
      console.log("error");
    } else {
      navigate("/product");
    }
  };
  return (
    <div>
      <div className="w-[600px] mx-auto mt-32">
        <BackButton url={"/dashboard"} className="" />
        <h3 className="text-indigo-600 text-center text-2xl">Create Product</h3>
      </div>
      <form onSubmit={handleSubmit} className="w-[600px] mx-auto pt-5">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          className="border w-full mt-2 rounded-sm p-2 bg-transparent border-[1px solid #ccc] text-white"
        />
        <input
          type="text"
          name="desc"
          onChange={(e) => setDesc(e.target.value)}
          placeholder="description"
          className="border w-full mt-2 rounded-sm p-2 bg-transparent border-[1px solid #ccc] text-white"
        />
        <input
          type="file"
          name="photo"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="product image"
          className="mt-2 text-white"
        />
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          className="border w-full mt-2 rounded-sm p-2 bg-transparent border-[1px solid #ccc] text-white"
        />
        <button className="w-full p-2 bg-blue-600 mt-2 text-white capitalize">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
