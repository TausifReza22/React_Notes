import React, { useState, useRef, useEffect } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

function RefExample() {
  // use ref: it is used to store the reference of the element, it is used persist value between the renders without causing the re-render of the component.

  //   const [counter, setCounter] = useState(0);
  //   const countRef = useRef(0);

  //   const handleUpdate = ()=>{
  //     // setCounter(counter + 1);
  //     countRef.current = countRef.current + 1;
  //     console.log(counter , countRef.current);
  //   }

  const inputref = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    inputref && inputref.current.focus();
  }, []);

  const handleFocus = () => {
    inputref.current.focus();
  };

  const handelFileClick = () => {
    fileRef.current.click();
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    width: "calc(100% - 22px)", // Adjusting for padding and border
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px 0",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#5CDB95",
    color: "white",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  };

  const formStyle = {
    maxWidth: "300px",
    margin: "50px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log("Login submitted", { username, password });
  };
  return (
    <div>
      {/* <h1>Counter Value: {counter}</h1>
 

      <h1> Ref counter value : {countRef.current}</h1> */}

      {/* <button onClick={handleUpdate}>Update Count</button> */}

      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            ref={inputref}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <DriveFolderUploadIcon  onClick={handelFileClick}/>
          <input
            type="file"
            placeholder="Password"
            ref={fileRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...inputStyle, display: "none" }}
          />
        </div>

        <button type="submit" style={buttonStyle} onClick={handleFocus}>
          Login
        </button>
      </form>
    </div>
  );
}

export default RefExample;
