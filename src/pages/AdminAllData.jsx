import React, { useEffect, useState } from "react";
import BackButton from "../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { getAllAdmindatas } from "../features/admin/adminSlice";

const AdminAllUser = () => {
  const { alldatas } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdmindatas());
  }, []);

  return (
    <div className="px-10 mt-32 text-white">
      <h4 className="text-center text-2xl capitalize">
        no. of total entries {alldatas.length}
      </h4>
      <BackButton url={"/dashboard"} />
      <div className="p-[250px] pt-0">
        <Bar
          data={{
            labels: alldatas.map((data) => data.job),
            datasets: [
              {
                label: "job",
                data: alldatas.map((data, index) => index),
                backgroundColor: [
                  "rgba(43,63,229,0.8)",
                  "rgba(250,192,19,0.8)",
                  "rgba(253,135,135,0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default AdminAllUser;
