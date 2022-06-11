import React, { useRef } from 'react'
import { useState } from 'react'
const Stopwatch = () => {
    // const [timerId,setTimerId]=useState();
    const [watch ,setWatch]=useState(0)
    const timerId=useRef(null)
    const start=()=>{
        if(!timerId.current)
        {
            let id=setInterval(()=>{
                setWatch((prev)=>prev+1)
            },1000);
            timerId.current=id;
        }
    };
    const pause=()=>{
        clearInterval(timerId.current)
        timerId.current=null;
    }
    const reset=()=>{
       clearInterval(timerId.current)
       setWatch(0);
       timerId.current=null;
    }
  return (
    <div>
        <h2>Stopwatch</h2>
        <h1>{watch}</h1>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Clean</button>
            <button onClick={reset}>End</button>
        </div>
    </div>
  )
}

export default Stopwatch