import React,{memo} from "react";

function Child({ number, incrementNumber }) {
  //memo => Lets you skip re-rendering a component when its props are unchanged.
  console.log("Child rendered");
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={incrementNumber}>Increment Number</button>
    </div>
  );
}

export default memo(Child);
