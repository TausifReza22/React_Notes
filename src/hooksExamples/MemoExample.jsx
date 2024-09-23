import React, { useState, useMemo } from "react";

function MemoExample() {
  // useMemo is a hook that is used to optimize the performance of the functional component.
  // useMemo is used to memoize the value of the function that is passed as the first argument.
  // useMemo is used to cache the value of the function that is passed as the first argument.
  //usememo is also used to not re-render the component if the value of the function is not changed.

  // syntax of usememo => useMemo(()=>{},[]), useEffect(()=>{},[])

  const [number, setNumber] = useState(2);

  const [counter, setCounter] = useState(0);
  // dependent function
  const incrementNumber = () => {
    setNumber(number + 1);
  };
  // normal function
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // expensive function => function that takes a lot of time to execute

  //without usememo

  // const square = () => {
  //   console.log("Square is called");
  //   for (let i = 0; i < 1000000000; i++) {}
  //   return number * number;
  // }

  // with usemmemo this will not be called unless the dependency is changed
  const square = useMemo(() => {
    console.log("Square is called");
    for (let i = 0; i < 1000000000; i++) {}
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Number : {number} </h1>
      <h1>Counter : {counter}</h1>

      {/* This is just a function's value rendering  we only want this to render when the number is updated. because it is just squaring the number value*/}
      <h1>Square :{square} </h1>

      <button onClick={incrementNumber}>Increment Number</button>

      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}

export default MemoExample;
