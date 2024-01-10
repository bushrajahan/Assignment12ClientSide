import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export function TimeLineVisualization() {
  const [users, setUsers] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch("https://assignment12-client-side-from.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment12-client-side-from.vercel.app/day")
      .then((res) => res.json())
      .then((data) => setDays(data));
  }, []);

  // Calculate the length of users and days arrays
  const usersCount = users.length;
  const daysCount = days.length;

  // Data for the pie chart
  const chartData = [
    ["Category", "Count"],
    ["Contests", daysCount],
    ["Participants", usersCount],
  ];

  return (
    <div>
      <h2 className="text-center font-jost font-bold text-2xl mb-8">
        Total Contest and Total Participents
      </h2>
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={chartData}
        options={{
          title: "Contests and Participants Overview",
        }}
      />
    </div>
  );
}
