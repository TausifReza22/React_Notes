import React from "react";
import Child2 from "./Child2";

function Child1({ counterValue }) {
  return (
    <div>
      Child1
      <Child2 counterValue={counterValue} />
    </div>
  );
}

export default Child1;
