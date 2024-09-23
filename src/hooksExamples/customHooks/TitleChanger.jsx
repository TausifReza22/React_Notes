import React, { useState, useEffect } from "react";
import useTitleChange from "./useTitleChange";

function TitleChanger() {
  const [title, setTitle] = useState("TitleChanger");
  const handleTitleChange = () => {
    setTitle("Title Changed");
    document.title = title;
    };
    
    useTitleChange(title);
    

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
        }}
        name=""
        id=""
      />
      {/* <button onClick={handleTitleChange}>Change title</button> */}
    </div>
  );
}

export default TitleChanger;
