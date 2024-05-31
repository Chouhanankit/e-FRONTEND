import React from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { isLoggedIn, checkStatus } = useAuthStatus();

  if (checkStatus) {
    return <h1 className="text-center text-xl my-10">loading</h1>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
