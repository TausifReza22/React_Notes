import React, { useReducer } from "react";

// Initial state of the form
const initialState = {
  name: "",
  email: "",
};

//PAYLOAD => it is the data that is sent along with the action.

// Reducer function that handles state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload }; // Update the name field in state with the new value

    //state = > {name:"shivansh", email: ""}

    case "SET_EMAIL":
      return { ...state, email: action.payload }; // Update the email field in state with the new value

    //state = > {name:"shivansh", email: "",email:"shivansh@navgurukul.org"}

    case "RESET":
      return initialState; // Reset the form to its initial state
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

const ReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, e.target);
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value }); // Dispatch an action to update the corresponding field in state
  };

  // Event handler for the reset button
  const handleReset = () => {
    dispatch({ type: "RESET" }); // Dispatch an action to reset the form
  };

  // Event handler for the generate button
  const handleGenerate = () => {
    console.log(state); // Log the current state to the console
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default ReducerForm;
