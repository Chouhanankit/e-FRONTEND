import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoogleUser } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { FaDatabase } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { googleuser } = useSelector((state) => state.auth);
  const isAdmin = !user ? user : user.isAdmin;

  const navigate = useNavigate();

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getGoogleUser());
  // }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="text-center mt-40">
      <div className="flex justify-center items-center flex-col gap-2 mb-5">
        {!isAdmin ? (
          <>
            <h3 className="text-blue-200 text-2xl capitalize">
              create your data entries
            </h3>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white p-5 rounded-full w-10 h-10 flex justify-center items-center text-xl"
            >
              +
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}

            <Link
              to={"/viewallentries"}
              className="bg-[#4f46e5] capitalize rounded-sm text-white px-5 py-2 mt-2 "
            >
              view my all data entries
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-5">
            <Link
              to={"/allusers"}
              class="relative inline-flex capitalize items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span class="relative flex gap-2 items-center px-8 py-2.5 transition-all ease-in duration-75 rounded-sm group-hover:bg-opacity-0">
                view all users
                <FaEye />
              </span>
            </Link>
            <Link
              to={"/alldatas"}
              class="relative inline-flex capitalize items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span class="relative px-8 py-2.5 flex gap-2 items-center transition-all ease-in duration-75 rounded-sm group-hover:bg-opacity-0">
                view all users data
                <FaDatabase />
              </span>
            </Link>
            <Link
              to={"/createproduct"}
              class="relative inline-flex capitalize items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span class="relative px-8 py-2.5 flex gap-2 items-center transition-all ease-in duration-75 rounded-sm group-hover:bg-opacity-0">
                create product
                <IoCreate />
              </span>
            </Link>
            <Link
              to={"/product"}
              class="relative inline-flex capitalize items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span class="relative px-8 py-2.5 flex gap-2 items-center transition-all ease-in duration-75 rounded-sm group-hover:bg-opacity-0">
                view all product
                <FaBorderAll />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
