import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoogleUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboardgoogle = () => {
  const { googleuser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGoogleUser());
  }, []);

  if (!googleuser) {
    navigate("/login");
  }
  return <div>dashborad google</div>;
};

export default Dashboardgoogle;
