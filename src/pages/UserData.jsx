import React, { useEffect } from "react";
// import UserDataTable from "../components/UserDataTable";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { getSingledata } from "../features/data/dataSlice";
import { useParams } from "react-router-dom";
import BackButton from "../components/Buttons";

const UserData = () => {
  const { data, isLoading } = useSelector((state) => state.userData);
  const params = useParams();
  // console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingledata(params.id));
  }, []);

  if (isLoading) {
    return (
      <h1 className="text-center my-10">
        <PulseLoader color="gray" loading={true} />
      </h1>
    );
  }
  return (
    <>
      <div className="text-white flex justify-center mt-32 flex-col gap-3 px-5">
        <BackButton url={"/dashboard"} className="" />
        <table class="table-auto border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr className="text-center text-[#4f46e5] capitalize">
              <th className="border border-slate-600 p-2">#</th>
              <th className="border border-slate-600 p-2">name</th>
              <th className="border border-slate-600 p-2">job</th>
              <th className="border border-slate-600 p-2">age</th>
              <th className="border border-slate-600 p-2">date</th>
              <th className="border border-slate-600 p-2">time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-slate-600 p-2">😊</td>
              <td className="border border-slate-600 p-2">{data.name}</td>
              <td className="border border-slate-600 p-2">{data.job}</td>
              <td className="border border-slate-600 p-2">{data.age}</td>
              <td className="border border-slate-600 p-2">
                {new Date(data.createdAt).toLocaleDateString("en-IN")}
              </td>
              <td className="border border-slate-600 p-2">
                {new Date(data.createdAt).toLocaleTimeString("en-IN")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserData;
