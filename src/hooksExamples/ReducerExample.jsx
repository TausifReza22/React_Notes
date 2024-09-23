import React, { useReducer } from "react";

function ReducerExample() {
  // use reducer  : useReducer is a hook that is used for state management in React. It is an alternative to useState.

  // Use reducer is like use state but it is used to handle large state objects and complex state logic.

  // reduce = > it is a function that is used to reduce the array to a single value. It takes a callback function as the first argument and an initial value as the second argument.

  const initialState = { count: 0 };

  function reducer(state, action) {
    console.log(state, action, initialState);

    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { count: state.count - 1 };
    }
  }
  //useState + reduce => useReducer

  const [state, dispatch] = useReducer(reducer, initialState);

  // dispatch method : it is used to send the action to the reducer function.

  // reducer function : it is a function that is used to update the state based on the action type.

  // action : it is an object that contains the type and payload.

  // console.log(state);

  return (
    <div>
      <h1>Count : {state?.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default ReducerExample;
