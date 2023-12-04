import React, { useContext, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import swal from "sweetalert"; // Import SweetAlert
import UseAuth from "../Auth/UseAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

 
  const MyCreated = () => {
    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(()=>{
      fetch(`http://localhost:3000/add/${id}`)
      .then(res => res.json())
      .then(data =>setData(data))
    },[])
    const { user } = UseAuth();
    const navigate = useNavigate()
    const { displayName, email } = user;
    const contestTags = ['Medical Contest', 'Article Writing', 'Gaming'];
    const handleClick =() =>{
        navigate(`/dashboard/mycreated`)
    }

    const handleSubmit = (e) => {

     
      e.preventDefault();
      const form = e.target;
      const attemptCount =0;
      const name = form.name.value;
      const image = form.image.value;
      const catagory = form.tag.value;
      const desc = form.Description.value;
      const price = form.price.value;
      const prize = form.prize.value;
      const hours = form.hours.value;
      const instruction = form.instruction.value;
      const winning = user?.displayName;
      const status ='pending'
      const formData = {
       contestName: name,
       attemptCount,
        image,
       contestType: catagory,
        price,
        displayName,
        email,
        prize,
        desc,
        instruction,
        shortDescription:desc,
        hours,
        winning,
        status
        
      };
      fetch(`http://localhost:5001/add/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Create SweetAlert instance on success
          Swal.fire("Success!", "Your item has been added successfully.", "success");
        })
        .catch((error) => {
          console.error("Error:", error);
          // Create SweetAlert instance on error
          Swal.fire("Error!", "There was an error adding your item.", "error");
        });
        
    };
  
  return (
    <div>
      <section className="max-w-4xl p-6 text-pink-700 mx-auto  rounded-md shadow-xl  mt-20">
        <h1 className="text-xl font-bold text-center font-grand capitalize dark:text-white">
          Update
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className=" dark:text-gray-200" htmlFor="name">
                Contest Name
              </label>
              <input
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label className=" dark:text-gray-200" htmlFor="FoodImage">
                 Image
              </label>
              <input
                id="Image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="image"
                defaultValue="Image"
                required
              />
            </div>
            <div>
              <label className=" dark:text-gray-200" htmlFor="catagory">
                Contest Description
              </label>
              <input
                id="Description"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="catagory"
                placeholder="Description"
                required
              />
            </div>

            <div>
              <label className=" dark:text-gray-200" htmlFor="productPrice">
               Contest price
              </label>
              <input
                id="productPrice"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="price"
                placeholder="price"
                required
              />
            </div>

            <div>
              <label className=" dark:text-gray-200" htmlFor="prize">
                Prize Money
              </label>
              <input
                id="Prize"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="prize"
                placeholder="prize Money"
            
              />
            </div>

            <div>
              <label className=" dark:text-gray-200" htmlFor="BuyerEnail">
                Instruction
              </label>
              <input
                id="BuyerEmail"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="instruction"
                placeholder="Instruction"
                
              />
            </div>
            <div>
            <select
                id="catagory"
                name="tag"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Contest Type"
              >
                <option value="" disabled>Select Contest Type/Tags</option>
                {contestTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
         
            <div>
              <label className=" dark:text-gray-200" htmlFor="prize">
                Hours
              </label>
              <input
                id="hours"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="hours"
                placeholder="Hours"
            
              />
            </div>

       
          </div>

          <button
            type="submit"
            className="mt-6 px-4 py-2 font-bold text-white bg-pink-700 rounded-full hover-bg-green-700 focus:outline-none focus:ring"
          >
            Add Item
          </button>
        </form>
      
      </section>
    </div>
  );
};

export default MyCreated;
