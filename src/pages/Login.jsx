import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import google from "../assets/google.webp";

const Login = () => {
  const { user, googleuser, isLoading, isSuccess, isError, message } =
    useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginWithGoogle = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  useEffect(() => {
    if (isSuccess && googleuser) {
      navigate("/dashboardgoogle");
    }
  }, [isSuccess, googleuser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/dashboard");
      // toast.success("login successfully");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [isSuccess, isError, message, user]);



  if (isLoading) {
    return (
      <h1 className="text-center mt-32">
        <PulseLoader color="gray" loading={true} />
      </h1>
    );
  }

  return (
    <>
      <div className="flex min-h-full mt-24 flex-1 flex-col justify-center px-6 py-1 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
             Login Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <button
            onClick={loginWithGoogle}
            className="bg-white w-full mt-4 p-2 flex items-center justify-center rounded-sm text-[17px] capitalize"
          >
            <img src={google} alt="" className="w-10 h-full" />
            sign in with google
          </button>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to={"/register"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
