import React from "react";
import Child3 from "./Child3";

export default function Child2({counterValue}) {
  return (
    <div>
      Child2
      <Child3 counterValue={counterValue} />
    </div>
  );
}
