import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createSingledata } from "../features/data/dataSlice";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";

const Modal = ({ onClose }) => {
  const { data, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.userData
  );
  const [formdata, setformdata] = useState({
    name: "",
    job: "",
    age: "",
  });
  const { name, job, age } = formdata;
  // console.log(formdata)

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formdata);
    dispatch(createSingledata(formdata));
  };

  useEffect(() => {
    if (data && isSuccess) {
      navigate(`/data/${data._id}`);
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [data, isSuccess, isError, message]);

  if (isLoading) {
    return (
      <h1 className="text-center my-10">
        <PulseLoader color="gray" loading={true} />
      </h1>
    );
  }
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center duration-200"
    >
      <div className="btn-border p-2 rounded-sm">
        <div className=" bg-[#5e24aa] w-[500px] p-2 text-white flex flex-col text-center rounded-sm">
          <button className=" place-self-end">
            <RxCross2 size={25} onClick={onClose} />
          </button>
          <div className="p-5">
            <h3 className="text-xl capitalize mb-3">fill your data</h3>
            <form onSubmit={handleSubmit}>
              <input
                value={name}
                name="name"
                onChange={handleChange}
                type="text"
                required
                placeholder="enter your name"
                className="w-full p-2 outline-none rounded-sm bg-transparent border mb-3 border-gray-400 placeholder:text-white  font-light"
              />
              <input
                value={job}
                name="job"
                onChange={handleChange}
                type="text"
                required
                placeholder="enter your job ..."
                className="w-full bg-transparent border p-2 outline-none rounded-sm mb-3 border-gray-400 placeholder:text-white font-light"
              />
              <input
                value={age}
                onChange={handleChange}
                name="age"
                type="number"
                required
                placeholder="enter your age..."
                className="w-full p-2 outline-none bg-transparent border border-gray-400 rounded-sm mb-2 placeholder:text-white font-light"
              />
              <button className="bg-gray-900 p-2 capitalize rounded-sm mt-5">
                create data
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
