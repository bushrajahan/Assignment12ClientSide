import React, { useState } from "react";
import {
  FaAd,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaSign,
  FaUser,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Components/useCart";
import UseAuth from "../Components/Auth/UseAuth";
import { useEffect } from "react";
import { Title } from "chart.js";

const Dashboard = () => {
  const [cart] = useCart();
  const { user } = UseAuth();
  console.log(user?.email);
  //Todo: get isAdmin value from the database
  const [admin, setAdmin] = useState([]);
  const [creator, setCreator] = useState([]);
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://assignment12-client-side-from.vercel.app/admin`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [admin]);
  useEffect(() => {
    fetch(`https://assignment12-client-side-from.vercel.app/creator`)
      .then((res) => res.json())
      .then((data) => setCreator(data));
  }, [creator]);
  useEffect(() => {
    fetch(`https://assignment12-client-side-from.vercel.app/user`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [users]);
  const isAdmin = admin?.some((adminUser) => adminUser?.email === user?.email);
  const isCreator = creator?.some(
    (creatorUser) => creatorUser?.email === user?.email
  );
  const isUser = users?.some((use) => use?.email === user?.email);
  console.log(isAdmin, isCreator, isUser);

  return (
    <div className="flex ">
      <div className=" min-h-screen text-white bg-black">
        
        <ul className="menu p-4">
          
          {isAdmin && !isCreator && !isUser && (
            <div>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaAd></FaAd> Manage Contest
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser></FaUser> Manage USER
                </NavLink>
              </li>
              <div className="divider flex-col flex-1">
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/allContest">
                    <FaSearch></FaSearch> MENU
                  </NavLink>
                </li>
              </div>
            </div>
          )}

          {isCreator && !isAdmin && !isUser && (
            <div>
              <li>
                <NavLink to="/dashboard/mycreated">
                  <FaAd></FaAd> Add Contest
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycontest">
                  <FaUtensils></FaUtensils> My Created Contest
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/submit">
                  <FaUser></FaUser> Contest submit
                </NavLink>
              </li>
              <div className="divider flex-col flex-1">
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/allContest">
                    <FaSearch></FaSearch> MENU
                  </NavLink>
                </li>
              </div>
            </div>
          )}

          {!isAdmin && !isCreator && (
            <>
              <li>
                <NavLink to="/dashboard/participate">
                  <FaUser /> User Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myWinning">
                  <FaWallet /> My Winning
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">
                  <FaSign /> profile
                </NavLink>
              </li>
            </>
          )}
         
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-center font-jost text-3xl text-yellow-400">Welcome to the dashboard !! <br /> To see the details click the options</h2>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
