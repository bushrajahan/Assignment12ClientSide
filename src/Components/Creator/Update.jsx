import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import UseAuth from "../Auth/UseAuth";

const MyCreated = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const { user } = UseAuth();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:300/add/ad/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  const onSubmit = (formData) => {
    const updatedData = {
      contestName: formData.name,
      shortDescription: formData.details,
      attemptedCount: 0,
      price: formData.price,
      prize: formData.prize,
      contestType: formData.category,
      prizeMoney: formData.prizeMoney,
      AuthorEmail: user?.email,
      AuthorName: user?.displayName,
      status: "pending",
    };

    fetch(`http://localhost:300/add/ad/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Handle success or error message
      });
  };

  return (
    <div>
      <section className="max-w-4xl p-6 text-pink-700 mx-auto rounded-md shadow-xl mt-20">
        <h1 className="text-xl font-bold text-center font-grand capitalize dark:text-white">
          Update
        </h1>
        <form
          className="mx-6 text-bold text-pink-600 font-jost"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Contest Name</label>
          <input
            type="text"
            defaultValue={data[0]?.contestName}
            {...register("name", { required: true })}
            className="input input-bordered w-full"
          />
          <div className="flex gap-2">
            <label className="form-control w-full">
              <label htmlFor="">Category</label>
              <select {...register("category")} className="select select-bordered">
                <option disabled selected defaultValue={data[0]?.contestType}>
                  
                </option>
                <option>Gaming</option>
                <option>Article</option>
                <option>Medical</option>
              </select>
            </label>
            <label className="form-control w-full">
              <label>Price</label>
              <input
                type="number"
                defaultValue={data[0]?.price}
                {...register("price")}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <label>Contest Prize</label>
              <input
                type="text"
                defaultValue={data[0]?.prize}
                {...register("prize")}
                className="input input-bordered w-full"
              />
            </label>
        
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-pink-400">Details</span>
            </div>
            <textarea
              {...register("details")}
              className="textarea textarea-bordered h-24"
              defaultValue={data[0]?.shortDescription}
            ></textarea>
          </label>
          <button type="submit" className="btn bg-yellow-300 my-4">
            Update
          </button>
        </form>
      </section>
    </div>
  );
};

export default MyCreated;
