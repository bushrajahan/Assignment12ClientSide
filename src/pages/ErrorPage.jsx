import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate()
  const backgroundImageStyle = {
    backgroundImage: 'url("https://i.ibb.co/x8tCNX9/7741849-3747371.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height of the div to fill the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
   const hanldeClick = () =>{
      navigate('/')
   }
  return (
    <div style={backgroundImageStyle}>
      {/* Content of the error page */}
      <button className='btn ' onClick={hanldeClick}>Go To home</button>
    </div>
  );
};

export default ErrorPage;
