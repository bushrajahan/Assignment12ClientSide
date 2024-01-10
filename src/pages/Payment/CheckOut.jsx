import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Components/useAxiosSecure';
import useCart from '../../Components/useCart';
import UseAuth from '../../Components/Auth/UseAuth';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
 
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret,setClientSecret] = useState([])
  const [transactionId,setTransactionId] = useState('')
  const [error,setError] = useState([])
   const axiosSecure = useAxiosSecure();
   const {user} = UseAuth();
   const {id} = useParams();
   console.log(id)
   const [data,setData] = useState([])
   useEffect(()=>{
    fetch(`https://assignment12-client-side-from.vercel.app/users/${id}`)
    .then(res =>res.json())
    .then(data =>setData(data))
   },[id])
   console.log(data,data.contestName)
   const formData ={
    name:user?.displayName,
    email:user?.email,
    price:data[0]?.price,
    Email:data[0]?.email,
    contestType:data[0]?.contestType,
    contestName:data[0]?.contestName,
    hours:data[0]?.hours,
  
    status:'pending'
    }
    const Update = {
       attemptedCount: data[0]?.attemptedCount  + 1
    }
    console.log(data[0]?.attemptedCount)
  
  const handleSubmit = async(event) =>{
    event.preventDefault()
    if(!stripe || !elements){
      return;
    }
    const card = elements.getElement(CardElement)
    if(card === 'null'){
      return
    }
    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if(error){
      console.log('payment Method',error)
      setError(error.message);
    }else{
      toast.success('Payment successful!', {
        position: "top-right",
        autoClose: 3000, // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log('payment Method',[paymentMethod ])
      fetch('http://localhost:300/payments',{
        method:'post',
        headers:{
          "Content-Type":'application/json',
        },
        body:JSON.stringify(formData)
      })
      .then((res)=> res.json())
      .then(data =>setData(data))
      
      fetch(`http://localhost:300/users/${id}`,{
        method:'PUT',
        headers:{
          "Content-Type":'application/json',
        },
        body:JSON.stringify(Update)
      })
      .then((res)=> res.json())
      .then(data =>console.log(data))


      setError('');
      toast.success('Payment successful!', {
        position: "top-right",
        autoClose: 3000, // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
   
    }
 
  }
  return (
    <div>
    <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary my-2' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-600'>{error}</p>
      {transactionId && <p className='text-green-400'>Your transaction id</p>}
      </form>
    </div>
  );
};

export default CheckOut;