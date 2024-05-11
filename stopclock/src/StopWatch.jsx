import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [time,setTime] = useState(0);
    const [isTimerOn, setIsTimerOn] = useState(false);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `Time: ${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
      };

    const handleStart = () => {
        setIsTimerOn((prevValue) => !prevValue);
    }

    const handleReset = () => {
        setTime(0);
        setIsTimerOn(false);
    }

    useEffect(() => {
        let timerId
        if(isTimerOn) {
            timerId =   setInterval(() => {
                setTime((prevValue) => prevValue + 1)
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId)
     
    },[isTimerOn])

  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      
    }}>
          <h4>Stopwatch</h4>
          <h4>{formatTime(time)}</h4>
          <div>
            <button onClick={handleStart}>{isTimerOn ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
          </div>
          
       
        
    </div>
  
  )
}

export default StopWatch