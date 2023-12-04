import React from 'react';
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Components/useCart';

const Dashboard = () => {
  const [cart] = useCart()
  //Todo: get isAdmin value from the database 

  const isAdmin = false;
  const isCreator =true;
  return (
    <div className='flex '>
      <div className="w-64 min-h-screen text-white bg-black">
        <ul className="menu p-4">
          {
            isAdmin? <>
                <div>
     
       
            <li><NavLink to='/dashboard/bookings'>
          <FaAd></FaAd>
           Manage Contest</NavLink></li>
            <li><NavLink to='/dashboard/allusers'>
          <FaUser></FaUser>
            Manage USER</NavLink></li>
            <div className="divider flex-col flex-1">
            <li><NavLink to='/'>
          <FaHome></FaHome>
            HOME</NavLink></li>
            <li><NavLink to='/allContest'>
          <FaSearch></FaSearch>
            MENU</NavLink></li>
            <li><NavLink to='/contact'>
          <FaEnvelope></FaEnvelope>
            CONTACT</NavLink></li>
            </div>
            </div>
            
            </>
            :
            <>
                  <div>
     
       
     <li><NavLink to='/dashboard/mycreated'>
   <FaAd></FaAd>
    Add Contest</NavLink></li>
     <li><NavLink to='/dashboard/mycontest'>
   <FaUtensils></FaUtensils>
     My Created Contest</NavLink></li>
     <li><NavLink to='/dashboard/submit'>
   <FaUser></FaUser>
     Contest submit</NavLink></li>
     <div className="divider flex-col flex-1">
     <li><NavLink to='/'>
   <FaHome></FaHome>
     HOME</NavLink></li>
     <li><NavLink to='/allContest'>
   <FaSearch></FaSearch>
     MENU</NavLink></li>
     <li><NavLink to='/contact'>
   <FaEnvelope></FaEnvelope>
     CONTACT</NavLink></li>
     </div>
     </div>
            
            </>
          }
        </ul>
     
      </div>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;