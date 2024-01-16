import { useEffect, useState } from "react";
import UseAuth from "../Auth/UseAuth";

const SignleWinner = () => {
  const { user } = UseAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:300/payments/pay/p/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments([data]));
  }, []);

  const handleWinnerClick = (index,id) => {
    // Create a copy of the payments array
    const updatedPayments = [...payments];
    // Toggle the winner status for the clicked payment
    updatedPayments[index].isWinner = !updatedPayments[index].isWinner;
    // Update the state with the modified array
    setPayments(updatedPayments);
    fetch(`http://localhost:300/payments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isWinner: updatedPayments[index].isWinner }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
    <h2 className="text-3xl">Total contestians: {payments.length}</h2>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>ContestName</th>

            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>ContesType</th>
            <th>Status</th>
            <th>Winner/Loser</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <th>{index + 1}</th>
              <td>{payment?.contestName}</td>
              <td>{payment?.name}</td>
              <td>{payment?.email}</td>
              <td>{payment?.price}</td>
              <td>{payment?.contestType}</td>
              <td>{payment?.status}</td>
              <td className="btn bg-red-400 m-2 text-white" onClick={() => handleWinnerClick(index,payment._id)}>
                {payment.isWinner ? 'winner' : 'SetWinner'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default SignleWinner;