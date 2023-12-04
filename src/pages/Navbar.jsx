import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Button from "../Components/Button";
import useCart from "../Components/useCart";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [cart] = useCart()
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const navitems = (
    <>
      <div className="lg:flex  ">
        <li className=" ">
          {" "}
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive ? "active " : isPending ? "pending" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="">
          {" "}
          <NavLink
            to={`/allContest`}
            className={({ isActive, isPending }) =>
              isActive ? "active " : isPending ? "pending" : ""
            }
          >
            All contest
          </NavLink>
        </li>
        <li className="">
          {" "}
          <NavLink
            to={`/login`}
            className={({ isActive, isPending }) =>
              isActive ? "active " : isPending ? "pending" : ""
            }
          >
            Login
          </NavLink>
        </li>
      </div>
    </>
  );

  return (
    <div>
      <div className="drawer z-10   text-white bg-black ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-between items-center ">
          {/* Navbar */}
          <div className="w-full flex justify-between items-center navbar">
            <div className=" lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  onClick={() => setIsDrawerOpen(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="px-2 mx-2 font-popi text-4xl font-bold  ">
              <img
                className="w-44 bg-black p-3"
                src="https://i.ibb.co/G5mYgXS/logo-light.png"
                alt=""
              />
            </div>

            <div className=" hidden lg:block">
              <ul className="flex justify- items-center  menu menu-horizontal ">
                {/* Navbar menu content here */}
                {navitems}
              </ul>
            </div>
            <div>
             <Link to='/dashboard/cart'>
               
             <button className="bg-white flex gap-2 text-black p-2 m-4 rounded-md">
                {" "}
                <BsCart3 />
                <div className="badge bg-black text-white ">{cart.length}</div>
              </button>
             </Link>
              <button className="bg-white  text-black p-2 m-4 rounded-md">
                {" "}
                <FaUser />
              </button>
              <button className="">
                <Button text={"CAR GIVEWAY"}></Button>
              </button>
            </div>
          </div>
          {/* Page content here */}
        </div>

        {isDrawerOpen && (
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              {navitems}
            </ul>
          </div>
        )}
        {isDrawerOpen && (
          <div className={"drawer-side "}>
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              {navitems}
              <button className="close-btn lg:hidden" onClick={toggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
