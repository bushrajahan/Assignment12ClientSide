import { useEffect, useState } from "react";
import UseAuth from "../Auth/UseAuth";
import { useNavigate } from "react-router-dom";

const ContestSubmitted = () => {
  const [Data, setData] = useState([]); // Initialize data as an empty array
  const { user } = UseAuth();
  const [loading, setLoading] = useState(true);
  const navigete = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:300/payments/pay/p/${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData([data]); // Convert object to array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user?.email]);

  if (loading) {
    return <p>Loading</p>;
  }
  const handleWinner = () =>{
    navigete(`/singlepay`)
  }
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>ContestType</th>
              <th>Status</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {Data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* Adding 1 to index to start from 1 */}
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.price}</td>
                <td>{item.contestType}</td>
                <td>{item.status}</td>
                <td className="btn btn-warning text-white" onClick={handleWinner}>SetWinner</td> {/* Replace with the actual property name */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContestSubmitted;
