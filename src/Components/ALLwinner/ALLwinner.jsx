import React, { useState, useEffect } from "react";

const WinnersList = ({ contestName }) => {
  console.log(contestName);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    // Fetch winners based on contest name from the backend
    fetch(`https://assignment12-client-side-from.vercel.app/${contestName}`)
      .then((response) => response.json())
      .then((data) => setWinners(data))
      .catch((error) => console.error("Error fetching winners:", error));
  }, [contestName]);
  console.log(winners);

  return (
    <div>
      {winners.length > 0 ? (
        <ul>
          <h2>Winner</h2>
          {winners.slice(0, 1).map((winner) => (
            <li key={winner._id}>
              <img src={winner.winning} />
              <p>{winner.length > 0 ? winner.winner : winner.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-600">Loser</p>
      )}
    </div>
  );
};

export default WinnersList;
