import React, { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = () => {
    console.log("Counter incremented in Parent");
    setCounter(counter + 1);
  };

  // usecallback hook is used to prevent the function from being recreated on every render

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  //   const incrementNumber = useCallback(() => {
  //     setNumber(number + 1);
  //   }, [number]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>

      <Child number={number} incrementNumber={incrementNumber} />
    </div>
  );
}

export default Parent;
