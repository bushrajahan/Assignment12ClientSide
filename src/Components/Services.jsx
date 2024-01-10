import React from "react";
import Button from "./Button";
import { BsCart3 } from "react-icons/bs";
import UseAuth from "./Auth/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "./useCart";

const Services = ({ data }) => {
  const {
    _id,
    contestName,
    image,
    attemptedCount,
    price,
    shortDescription,
    organizer,
    prize,
    motivation,
    winning,
  } = data;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const handleAddCart = () => {
    if (user && user.email) {
      // TODO:send cart item database
      console.log(user?.email);
      const cartItem = {
        menuID: _id,
        email: user?.email,
        contestName,
        image,
        price,
        attemptedCount,
        shortDescription,
        organizer,
        motivation,
        winning,
        prize,
      };
      axios.post("https://assignment12-client-side-from.vercel.app/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Thanks to join the ${contestName}contest`,
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch the cart item
          refetch();
        }
      });
    } else {
      //alert
      Swal.fire({
        title: "You are not log in",
        text: "Please Login First!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  const handleClick = () => {
    navigate(`/details/${_id}`);
  };
  return (
    <div>
      <div className="card  glass mx-2">
        <figure>
          <img className="w-full h-80" src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {contestName}</h2>
          <h2 className="card-title">Contestiner : {attemptedCount}</h2>
          <p>{shortDescription?.slice(0, 42)}......</p>
          <div className="card-actions justify-between">
            <button onClick={handleAddCart}>
              <BsCart3 className=""></BsCart3>
            </button>
            <button
              className="bg-orange-400 text-white p-2 font-jost"
              onClick={() => handleClick(_id)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
