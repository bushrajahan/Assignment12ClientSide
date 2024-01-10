import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import UseAuth from "../Components/Auth/UseAuth";
import { useState } from "react";
import { useEffect } from "react";


const UserProfile = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
  const {user,logOut} = UseAuth()
  useEffect(()=>{
   
    setLoading(!user.photoURL)
  },[user.photoURL])
  const handleClick =() =>{
    logOut();
  }
  const handleOrder =() =>{
  
    navigate('/dashboard')
   
  }
  
  return (
    <div className="text-red-400">
    <div className="dropdown  lg:dropdown-end md:dropdown-bottom">

       
 <label tabIndex={0} className=" m-1">
   {

   loading?

<span className="loading loading-spinner loading-lg"></span>:
    <img src={user.photoURL}  alt=""  className='rounded-lg w-10'/> 

     
   }
   
 </label>
 <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
  {/* <li><a href="" onClick={handleAdded}>
    MyAdded
    </a></li>
    <li><a href="" onClick={handleAdd}>
    AddProduct
    </a></li> */}
  <li><a >{user.email}</a></li>
  <li><a onClick={handleOrder}>Dashboard</a></li>
   <li><button  onClick={handleClick}>Logout</button></li>
 </ul>
 

</div>
   </div>
  );
};

export default UserProfile;