import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate, useParams } from "react-router-dom";
import Countdown from "react-countdown";
import WinnersList from "../ALLwinner/ALLwinner";
import Timer from "../ALLwinner/Timer";

const Details = () => {

  //date to hours 



  let  count =0 ;
   count=count +1;
   const navigate = useNavigate();
   const { id } = useParams();
   const [data, setData] = useState([]);
   const [isFlipped, setIsFlipped] = useState(false);
   const [loading, setLoading] = useState(true);
   const [timeDifference, setTimeDifference] = useState(0);
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(`https://assignment12-client-side-from.vercel.app/users/${id}`);
         const fetchedData = await response.json();
 
         if (Array.isArray(fetchedData) && fetchedData.length > 0) {
           setData(fetchedData[0]);
           setLoading(false);
         } else {
           console.error("Empty or invalid data received:", fetchedData);
         }
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
 
     fetchData();
   }, [id]);
 
   useEffect(() => {
     const calculateTimeDifference = () => {
       if (data.hours) {
         const currentDate = new Date();
         const contestEndDate = new Date(parseInt(data.hours));
         const timeDiff = Math.abs(contestEndDate - currentDate);
         console.log(timeDiff)
         setTimeDifference(Math.max(0, timeDiff)); // Ensure time difference is non-negative
       }
     };
 
     calculateTimeDifference();
   }, [data.hours]);
  console.log(data, id ,timeDifference);

 

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };
  const handleOrder = (id) => {
    navigate(`/payment/${id}`);
  };
  const handleWinner = () =>{
    navigate('/winner')
  }
  const handlePayment = () =>{
    navigate(`/pay`)
  }



  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div key="front">
        {/* Front Component */}
        {data && (
          <div
            className="card bg-white text-black text-center shadow-xl "
            onClick={handleClick}
          >
            <div className="flex justify-center items-center">
              <figure>
                <img className="w-96 h-80" src={data.image} alt="Album" />
              </figure>
              <figure>
                <img
                  className="w-96 h-80 hidden lg:block"
                  src={data.image}
                  alt="Album"
                />
              </figure>
              <figure>
                <img
                  className="w-96 h-80 hidden lg:block"
                  src={data.image}
                  alt="Album"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <h2 className="font-grand text-3xl">{data.contestName}</h2>
              <p className="font-mont text-3xl"> {data.contestType}</p>
              <p className="font-grand">{data.description}</p>
              <p className="font-mont text-xl ">{data.shortDescription}</p>
              <p className="font-grand ">{data.attemptCount}</p>
              <p className="font-grand text-yellow-300 text-3xl">
                {data.price}$
              </p>
              <p className=""></p>
              
              <div>
              {timeDifference > 0 ? (
                <div>
                   Time Remaining: {Math.floor(timeDifference  /  (1000 * 60 * 60))} hours {Math.floor((timeDifference / 1000 / 60) % 60)} minutes
                </div>
              ) : (
                <div>Contest has ended</div>
              )}
            </div>
               <button className='btn' onClick={handlePayment}>SetWinner</button>
              
              <button
                onClick={() => handleOrder(data._id)}
                className="btn bg-yellow-300 font-grand capitalize text-black hover:text-black"
              >
                order
              </button>
            </div>
          </div>
        )}
      </div>
      <div key="back">
        {/* Back Component */}
        {data && (
          <div
            className="card bg-black text-white text-center shadow-xl "
            onClick={handleClick}
          >
            <div className="flex justify-center items-center">
              <figure>
                <img className="w-96 h-80" src={data.image} alt="Album" />
              </figure>
              <figure>
                <img
                  className="w-96 h-80 hidden lg:block"
                  src={data.image}
                  alt="Album"
                />
              </figure>
              <figure>
                <img
                  className="w-96 h-80 hidden lg:block"
                  src={data.image}
                  alt="Album"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <h2 className="font-grand text-3xl">{data.contestName}</h2>
              <p className="font-mont text-3xl"> {data.contestType}</p>
              <p className="font-grand">{data.description}</p>
              <p className="font-mont text-xl ">{data.shortDescription}</p>
              <p className="font-grand ">Participiate{data.attemptedCount}</p>

              <p className="font-grand text-yellow-300 text-3xl">
                {data.price}$
              </p>
              <p className=""></p>
              {data.hours && <Countdown date={new Date(data.hours)} />}
              <div>
              {timeDifference > 0 ? (
                <div>
                  Time Remaining: {Math.floor(timeDifference / (1000 * 60 * 60))} hours {Math.floor((timeDifference / 1000 / 60) % 60)} minutes
                </div>
              ) : (
                <div>Contest has ended</div>
              )}
            </div>
              <button className='btn ' onClick={handlePayment}>SetWinner</button>
              <button
                onClick={() => handleOrder(data._id)}
                className="btn bg-yellow-300 font-grand capitalize text-white hover:text-black"
              >
                order
              </button>
            </div>
          </div>
        )}
      </div>
    </ReactCardFlip>
  );
};

export default Details;
