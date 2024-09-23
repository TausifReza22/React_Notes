import React, {useState} from "react";

function Usestate() {

    // hook => hooks are the functions that help you to use the state and other react features in the functional components.

    // useState is a hook that is used to add the state in the functional components.

    // state => it is an internal object of a component.
    // It is used to store the data that can be used in the component.
    // whenever the state changes the component will re-render.

    // useState is a function that returns an array. The first element of the array is the state and the second element is the function that is used to update the state.
    const [state, setState] = useState(0);


  return (
    <div>
      <h1>Usestate</h1>
    </div>
  );
}

export default Usestate;
