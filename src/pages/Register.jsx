import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import useAxiosPublic from "../Components/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { register: registerUser, handleUpdateProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { name, email, photo, password } = data;

    const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/;

    try {
      let role = "user";
      if (email === "jbushra7711@gmail.com" && password === "123A@123a") {
        role = "admin";
      }
      if (email === "sayeedsuuu@gmail.com" && password === "123A@123ab") {
        role = "creator";
      }

      if (pattern.test(password)) {
        const res = await registerUser(email, password);
        const user = res.user;
        handleUpdateProfile(name, photo);

        toast.success("Congrats! Welcome to shopping");

        const userInfo = {
          name: name,
          email: email,
          password: password,
          role: role,
        };

        const response = await axiosPublic.post(
          "https://assignment12-client-side-from.vercel.app/register",
          userInfo
        );

        if (response.data.insertedId) {
          toast.success("User added to the database");
        }
      } else {
        toast.error(
          "Password must contain at least one uppercase letter, one special character, and be a minimum of 6 characters in length"
        );
      }
    } catch (error) {
      console.error("Error during registration:", error);

      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      }
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div
      className=""
      style={{ backgroundImage: `url(https://i.ibb.co/r50fvNm/resturent.jpg)` }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col bg-white">
          <h2 className="text-center lg:text-5xl font-mont text-red-500">
            Welcome to Pomana
          </h2>
          <p className="text-center font-mont text-red-500">Please Register</p>
          <div className="card max-w-sm">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mt-6 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className={`input input-bordered ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <span className="text-red-500">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className={`input input-bordered ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    placeholder="photoURL"
                    className={`input input-bordered ${errors.photo ? "border-red-500" : ""}`}
                  />
                  {errors.photo && <span className="text-red-500">PhotoURL is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                    className={`input input-bordered ${errors.password ? "border-red-500" : ""}`}
                  />
                  {errors.password && <span className="text-red-500">Password is required</span>}
                </div>

                <button className="btn bg-red-600 text-white w-full">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mx-8">
              <button
                className="btn bg-red-600 text-white capitalize w-full"
                onClick={handleGoogle}
              >
                Sign Up with Google
              </button>
            </div>
            <p className="text-center mt-2 font-bold font-grand">
              Already have an account{" "}
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
