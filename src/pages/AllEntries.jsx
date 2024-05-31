import React, { useEffect } from "react";
import BackButton from "../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSingledata,
  getAlldatas,
  removeFromState,
} from "../features/data/dataSlice";
import { PulseLoader } from "react-spinners";
import { MdDelete } from "react-icons/md";

const AllEntries = () => {
  const { datas, isLoading, isSuccess } = useSelector(
    (state) => state.userData
  );
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(closeSingledata(id));
    if (isSuccess) {
      dispatch(removeFromState(id));
    }
  };

  useEffect(() => {
    dispatch(getAlldatas());
  }, []);

  if (isLoading) {
    return (
      <h1 className="text-center my-32">
        <PulseLoader color="gray" loading={true} />
      </h1>
    );
  }

  if (!datas || !datas.length) {
    return (
      <h3 className="text-white mt-32 text-center text-2xl capitalize">
        no entries are yet
      </h3>
    );
  }

  return (
    <div>
      <div className="text-white flex justify-center mt-32 flex-col gap-3 px-10">
        <h2 className="text-center text-3xl capitalize text-yellow-400">
          view my all entries
        </h2>
        <BackButton url={"/dashboard"} className="" />
        {datas.map((datas) => (
          <table
            key={datas._id}
            class="table-fixed border-separate border-spacing-2 border border-slate-500"
          >
            <thead>
              <tr className="text-center text-[#4f46e5] capitalize">
                <th className="border border-slate-600 p-2">#</th>
                <th className="border border-slate-600 p-2">name</th>
                <th className="border border-slate-600 p-2">job</th>
                <th className="border border-slate-600 p-2">age</th>
                <th className="border border-slate-600 p-2">date</th>
                <th className="border border-slate-600 p-2">time</th>
                <th className="border border-slate-600 p-2">delete</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center ">
                <td className="border border-slate-600 p-2">😊</td>
                <td className="border border-slate-600 p-2">{datas.name}</td>
                <td className="border border-slate-600 p-2">{datas.job}</td>
                <td className="border border-slate-600 p-2">{datas.age}</td>
                <td className="border border-slate-600 p-2">
                  {new Date(datas.createdAt).toLocaleDateString("en-IN")}
                </td>
                <td className="border border-slate-600 p-2">
                  {new Date(datas.createdAt).toLocaleTimeString("en-IN")}
                </td>
                <td className="border border-slate-600 p-2">
                  <MdDelete
                    onClick={() => handleDelete(datas._id)}
                    className="inline cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default AllEntries;
