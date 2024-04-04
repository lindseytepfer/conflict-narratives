import React, { useState, useEffect } from 'react';

export const CountdownTimer = ( {forceStop} ) => {
    const [timeLeft, setTimeLeft] = useState(300);
  
    useEffect(() => {
      if (!timeLeft) { forceStop() }
  
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000); 
  
      return () => clearInterval(intervalId);
    }, [timeLeft]);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
  
    return (
      <div className='countdown-timer'>
        <p><span id="warning-text">Recording in process...</span><br/>
        <span className="subtext">the 'end recording' button will activate <br/>after 1 minute has passed.</span>
        
        <br/><br/>
            time remaining:</p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}<br/><br/>
      </div>
    );
  };