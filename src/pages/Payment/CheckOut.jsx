import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UseAuth from '../../Components/Auth/UseAuth';

const CheckOut = () => {
  const [error, setError] = useState('');
  const {user} = UseAuth()
  const stripe = useStripe();
  const elements = useElements();
  const{id} = useParams();
  const [data,setDatas] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const fetchedData = await response.json();

        // Check if fetchedData is an array and not empty
        if (Array.isArray(fetchedData) && fetchedData.length > 0) {
          setDatas(fetchedData[0]);
        } else {
          console.error("Empty or invalid data received:", fetchedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handlePaymentSuccess = async () => {
    toast.success('Payment successful!', {
      position: 'top-right',
      autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Assuming you have a formData object to send
    const formData = {
      // Your form data here
        name:data.contestName,
        image:data.image,
        desc:data.shortDescription,
        type:data.contestType,
        winning:data.winnning>0?data.winning:user?.displayName,
         price:data.price,
         prize:data.prize,
         email:user?.email,
         Email:data.email
        
      
    };

    try {
      const response = await fetch('http://localhost:3000/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to the server');
      }

      const data = await response.json();
       if(data.insertedId){
        toast.success('data is added to the database')
       }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: card,
      });

      if (error) {
        console.error('Payment error:', error);
        setError(error.message || 'Payment failed');
      } else {
        console.log('Payment method:', paymentMethod);
        setError('');
        handlePaymentSuccess();
        // Handle successful payment, e.g., send paymentMethod.id to your server
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <>
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
        <button className='btn bg-orange-400 p-2' type="submit" disabled={!stripe}>
          Pay
        </button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
      <ToastContainer />
    </>
  );
};

export default CheckOut;
