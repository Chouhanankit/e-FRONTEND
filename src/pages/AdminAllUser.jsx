import React, { useEffect, useState } from "react";
import BackButton from "../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Chart, Line } from "react-chartjs-2";
import { getAllAdminUsers } from "../features/admin/adminSlice";

const AdminAllUser = () => {
  const { allusers } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdminUsers());
  }, []);

  return (
    <div className="px-10 mt-32 text-white">
      <h4 className="text-center text-2xl capitalize">
        total no. of users {allusers.length}
      </h4>
      <BackButton url={"/dashboard"} />
      <div className="p-[250px] pt-0">
        <Bar
          data={{
            labels: allusers.map((data) => data.name),
            datasets: [
              {
                label: "name",
                data: allusers.map((data, index) => index),
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
