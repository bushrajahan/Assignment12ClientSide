import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import useAxiosPublic from "../Components/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleUpdateProfile, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const img = form.photo.value;
    const password = form.password.value;

    const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/;

    try {
      if (pattern.test(password)) {
        const res = await register(email, password);
        const user = res.user;
        handleUpdateProfile(name, img);

        toast.success("Congrats! Welcome to shopping");
        const userInfo = {
          name: name,
          email: email,
        };

        const response = await axiosPublic.post('http://localhost:3000/register', userInfo);
        console.log(response)

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
    <div className="" style={{ backgroundImage: `url(https://i.ibb.co/r50fvNm/resturent.jpg)` }}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col bg-white">
          <h2 className="text-center lg:text-5xl font-mont text-red-500">
            Welcome to  Pomana
          </h2>
          <p className="text-center font-mont text-red-500">Please Register</p>
          <div className="card max-w-sm">
            <form className="card-body" onSubmit={handleSubmit}>
              
              <div className="form-control mt-6 w-full">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photoURL"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
