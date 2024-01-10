import React from "react";
import useCart from "../../Components/useCart";
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/useAxiosSecure";
import UseAuth from "../../Components/Auth/UseAuth";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const { user } = UseAuth();
  // console.log(user)
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`https://assignment12-client-side-from.vercel.app/cart/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="text-black flex  justify-evenly">
        <Title text="MY " win="CART" className=""></Title>
        <h2 className="text-4xl   font-jost">Total Price :{totalPrice}</h2>
        <Button text="Pay"></Button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>image</th>
                <th>Name</th>
                <th>price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.contestName}</div>
                        {/* <div className="text-sm opacity-50">{item.price}</div> */}
                      </div>
                    </div>
                  </td>

                  <td>{item.contestType}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {item.price}$
                    </button>
                  </th>
                  <th>
                    <button onClick={() => handleDelete(item._id)}>
                      <FaTrash className="text-red-500" />
                    </button>
                  </th>
                </tr>
              ))}
              {/* row 1 */}

              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
