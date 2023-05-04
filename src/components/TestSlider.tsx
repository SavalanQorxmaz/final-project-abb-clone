import React from 'react'
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const TestSlider = () => {

    const [inputValue, setInputValue] = useState("");
    const [stepCount, setStepCount] = useState(0)
    const [lastSlideChangeTime, setLastSlideChangeTime] = useState(Date.now)
    const currentSlideTime = useRef(Date.now())
    const [count, setCount] = React.useState(0)
    const requestRef = React.useRef<any>(0);
    const previousTimeRef = React.useRef();

   
      
      React.useEffect(() => {
        const animate = (time:any) => {
            if (previousTimeRef.current != undefined) {
              const deltaTime = time - previousTimeRef.current;
              
              // Pass on a function to the setter of the state
              // to make sure we always have the latest state
              setCount(prevCount => (prevCount + deltaTime * 0.001) % 100);
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
          }
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
      }, []); 
      // Make sure the effect runs only once
  return (
    <div>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {Math.round(count)}</h1>
    </div>
  )
}

export default TestSlider