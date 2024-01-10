import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import UseAuth from "../Auth/UseAuth";
import { Chart } from "chart.js/auto"; // Import Chart.js locally
import WinnersList from "../ALLwinner/ALLwinner";

const ProfileComp = () => {
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState([]);
  const { user } = UseAuth();

  useEffect(() => {
    fetch(
      `https://assignment12-client-side-from.vercel.app/day?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);
  useEffect(() => {
    fetch(`https://assignment12-client-side-from.vercel.app/winner`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Dynamic Pie chart data
  const pieData = {
    labels: userData.map((data, index) => `Contest ${index + 1}`),
    datasets: [
      {
        label: "Contest Lengths",
        data: data.length,
        backgroundColor: Array.from(
          { length: userData.length },
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.2)`
        ),
        borderColor: Array.from(
          { length: userData.length },
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 1)`
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={pieData} />
    </div>
  );
};

export default ProfileComp;
