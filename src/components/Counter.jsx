import React from "react";
import "./counter.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const { counterValue, value } = {
//   counterValue: 0,
//   value: 12,
// };

function Counter({ counterValue, value }) {
  const navigate = useNavigate();

  console.log(counterValue, value, "This is the value of props");

  // State  => it is an internal object that is used to store the data in the component.

  //syntax of useEffect
  //it takes a callback functtion as the first argument and a dependency array as the second argument

  //useeefct is used to perform the side effects in the functional components

  //if the dependency array is empty then the useEffect will run only once
  //if the dependency array is not empty then the useEffect will run whenever the value of the dependency array changes
  //if the dependency array is not present then the useEffect will run whenever the component is rendered or any state changes in the component.

  let callback = () => {
    setCount(counterValue);
    console.log("This is the use effect");
  };
  useEffect(callback, [counterValue]);

  const [count, setCount] = useState(counterValue);

  //  let count = 0;

  function increment() {
    setCount(count + 1);
    // count++;

    if (count === 20) navigate("/about");

    console.log(count);
  }

  function decrement() {
    // count--;
    setCount(count - 1);
    console.log(count);
  }

  // If you are using javsacript in a react component you must use {}.
  return (
    <div className="container">
      <button className="increment" onClick={increment}>
        +
      </button>
      <span>{count}</span>
      <button className="decrement" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;

// const n= 10;
// const m = 20;

// function add (x,y){
//     return x+y;
// }

// add(n,m)
