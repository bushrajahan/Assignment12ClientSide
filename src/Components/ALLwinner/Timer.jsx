import { useTimer } from 'react-timer-hook';

const Timer = ({ durationInHours }) => {
  // Convert hours to seconds
  const durationInSeconds = durationInHours * 3600;

  // Calculate the expiryTimestamp based on the current time and the duration prop
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + durationInSeconds);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{ textAlign: 'center' }}>
    
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p className='text-orange-400 text-xl'>{isRunning ? 'Running' : 'Not running'}</p>
      <button className='btn bg-orange-500 mx-2' onClick={start}>Start</button>
      <button className='btn bg-red-500 mx-2' onClick={pause}>Pause</button>
      <button className='bg-green-500 mx-2 p-2' onClick={resume}>Resume</button>
      <button className='btn bg-orange-500 mx-2'
        onClick={() => {
          // Restart the timer with the specified duration
          const newExpiryTimestamp = new Date();
          newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + durationInSeconds);
          restart(newExpiryTimestamp);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Timer;
