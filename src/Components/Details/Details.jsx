import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate, useParams } from "react-router-dom";
import Countdown from "react-countdown";
import WinnersList from "../ALLwinner/ALLwinner";
import Timer from "../ALLwinner/Timer";

const Details = () => {
  let  count =0 ;
   count =count +1;
  const navigate = useNavigate();
  const [data, setDatas] = useState({});
  const { id } = useParams();
  const [isFlipped, setIsFlipped] = useState(false);
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://assignment12-client-side-from.vercel.app/users/${id}`
        );
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

  console.log(data, id);
  const handleCountdownComplete = () => {
    setCountdownCompleted(true);
  };

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
               <Timer key={data.id} durationInHours= {(data.hours > 0 ? data.hours : 2) }></Timer>
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
              <Timer key={data.id} durationInHours= {(data.hours > 0 ? data.hours : 2) }></Timer>
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
