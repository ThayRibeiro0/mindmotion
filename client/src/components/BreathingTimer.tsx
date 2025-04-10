import React, { useState, useEffect } from 'react';

//BreathingTimer component
const BreathingTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime: number) => prevTime - 1); // Decrease time left by 1 second
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(30);
  };

  return (
    <div className='breathing-timer-container'>
      <h2 className="breathing-timer-title">Breathing Timer</h2>
      {timeLeft > 0 ? (
        <p className="breathing-timer-remaining">Time remaining: {timeLeft} seconds</p>
      ) : (
        <p className="breathing-timer-complete">Breathing exercise complete!</p>
      )}
      <div className='timer-controls'>
        {!isActive && timeLeft === 30 && (
          <button className='breathing-timer-start' onClick={handleStart}>Start</button>
        )}
        {(isActive || timeLeft < 30) && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default BreathingTimer;
