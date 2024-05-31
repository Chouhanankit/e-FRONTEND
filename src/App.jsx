import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import UserData from "./pages/UserData";
import AllEntries from "./pages/AllEntries";
import AdminAllUser from "./pages/AdminAllUser";
import AdminAllData from "./pages/AdminAllData";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import CheckOut from "./pages/CheckOut";
import Dashboardgoogle from "./pages/Dashboardgoogle";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data/:id" element={<UserData />} />
        <Route path="/viewallentries" element={<AllEntries />} />
        <Route path="/allusers" element={<AdminAllUser />} />
        <Route path="/alldatas" element={<AdminAllData />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/dashboardgoogle" element={<Dashboardgoogle />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
