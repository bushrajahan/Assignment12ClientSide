import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./pages/firebase.config";

import useAxiosPublic from "./Components/useAxiosPublic";
import axios from "axios";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const axiosPublic = useAxiosPublic();




const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signin
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //user login with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //user with Logout
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  //update profile
  const handleUpdateProfile = async (name, photo) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
  
      setUser(auth.currentUser);
      // Additional logic if needed
  
      // Force a reload of the entire page
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  //using observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedEmail = { email: userEmail };
    
      setUser(currentUser);
      console.log("CTT", currentUser);
      setLoading(false);
      if(currentUser){
         const loggedUser = {email: currentUser.email};
         axios.post('http://localhost:300/jwt',loggedUser,{withCredentials:true})
         .then(res =>{
            console.log('token-response',res.data)
         })
      
      }
      else{
        //do something
        
        axios.post('http://localhost:300/logout',loggedEmail,{
          withCredentials:true
        })
        .then(res => {
          console.log('token response ',res.data)
        })
      
      }

      console.log(user);
  
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const Alluser = {
    register,
    logOut,
    googleLogin,
    handleUpdateProfile,
    user,
    signIn,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={Alluser}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;


