import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UseAuth from "../Auth/UseAuth";
import { Chart } from "react-google-charts";

const MyWinning = () => {
 

  const [uset, setUser] = useState([]);
  
  const { user } = UseAuth();

  useEffect(() => {
    fetch(
      `http://localhost:300/payments/email/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
 
  
  
  return (
    <div>
      <div className="overflow-x-hidden">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ContestName</th>
              <th>Type</th>
              <th>Winning/Lose</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {uset.map((man, index) => (
                man.isWinner==true?
                
                <tr key={man._id}>
                 
                 
                <th>{index + 1}</th>
                <td>{man.ame}</td>
                <td>{man.contestType}</td>
                <td>
                 
                </td>
              </tr>:''
            ))}
            {/* row 2 */}

            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWinning;
