import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutGoogleUser, logOutUser } from "../features/auth/authSlice";
import { FiLogOut } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
  const { user, googleuser } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  const handleGoogleLogOut = () => {
    dispatch(logOutGoogleUser());
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full text-white px-4 py-5 capitalize shadow-md flex justify-between items-center bg-[#15171E] z-20">
        <div className="flex items-center gap-3">
          {(user && "") ||
            (googleuser && (
              <img
                src={googleuser.image}
                alt="img"
                className="rounded-full w-10 h-10"
              />
            ))}
          <Link to={"/dashboard"} className="logo text-xl">
            {/* {!user ? "navbar" : `${user.name}`} */}
            {(user && `${user.name}`) ||
              (googleuser && `${googleuser.name}`) ||
              "E-COMMERCE"}
          </Link>
        </div>
        <div className="flex gap-3">
          {!user && !googleuser ? (
            <>
              <Link
                to={"/login"}
                className="bg-[#29303D] px-5 py-2 rounded-full"
              >
                login
              </Link>
              <Link
                to={"/register"}
                className="bg-[#29303D] px-5 py-2 rounded-full"
              >
                register
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/shopping"}
                // onClick={handleLogOut}
                className={`bg-violet-900 flex py-2 items-center gap-2 px-5 leading-0  rounded-full capitalize ${
                  // (user && user.isAdmin === true) || (googleuser && "hidden")
                  // user.isAdmin === true ? "hidden" : "block"
                  googleuser || (user.isAdmin && "hidden")
                }`}
              >
                shopping
                <FaShoppingBag />
              </Link>
              <Link
                to={"/cart"}
                // onClick={handleLogOut}
                className={`bg-orange-600 flex py-2 items-center gap-2 px-5 leading-0  rounded-full capitalize ${
                  // (user && user.isAdmin === true) || (googleuser && "hidden")
                  // user.isAdmin === true && googleuser ? "hidden" : "block"
                  // user.isAdmin === true || (googleuser && "hidden")
                  googleuser || (user.isAdmin && "hidden")
                }`}
              >
                my cart
                <span>{cartItems.length}</span>
                <FaCartArrowDown />
              </Link>
              {googleuser ? (
                <button
                  onClick={handleGoogleLogOut}
                  className="bg-red-700 px-5 py-2 rounded-full capitalize flex items-center gap-2"
                >
                  logout
                  <FiLogOut />
                </button>
              ) : (
                <button
                  onClick={handleLogOut}
                  className="bg-red-700 px-5 py-2 rounded-full capitalize flex items-center gap-2"
                >
                  logout
                  <FiLogOut />
                </button>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
