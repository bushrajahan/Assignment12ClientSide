import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export function DataShow() {
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    fetch("https://assignment12-client-side-from.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment12-client-side-from.vercel.app/admin")
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment12-client-side-from.vercel.app/creator")
      .then((res) => res.json())
      .then((data) => setCreator(data));
  }, []);

  const totalLength = user.length + admin.length + creator.length;

  const data = [
    ["Category", "Count"],
    ["Users", user.length],
    ["Admins", admin.length],
    ["Creators", creator.length],
  ];

  const options = {
    title: "User Types",
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold font-jost">Pariticipate progress </h2>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <p>Total Number of Users, Admins, and Creators: {totalLength}</p>
    </div>
  );
}
