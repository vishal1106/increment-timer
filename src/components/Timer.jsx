import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Timer = () => {
  const [timer,setTimer]= useState(100)
  useEffect(()=>{
      const id= setInterval(()=>{
          setTimer((prev)=>prev-1);
      },1000);
      return ()=>{
        clearInterval(id)
    };
  },[timer])
 
    return (
    <div>Count:{timer}</div>
  )
};

export default Timer