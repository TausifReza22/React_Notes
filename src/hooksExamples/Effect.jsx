import React, { useState, useEffect } from "react";
import axios from "axios";

function Effect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]); // usestate gives us the current value and the function to update the value
  // hooks are functions
  
  // console.log("Component rendered");

  // Use effect is used to perform the side effects in the functional components.
  useEffect(() => {
    console.log("NO DEPENDENCY");
  });

  useEffect(() => {
    console.log("EMPTY DEPENDENCY ARRAY");
    axios.get("https://dummyapi.online/api/movies").then((response) => {
      setData(response.data); // time taking
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    console.log("COUNT DEPENDECY");
  }, [count, data]);

  useEffect(() => {
    console.log("Data DEPENDECY", data);
  }, [data]);

  // if(data){ data.map((Res)=>{})}
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Plus</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={() => setData(data + 1)}>Data Plus</button> */}

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"  
      
      }}>

        {
          data && data?.map((movie) => {
            return (
              <div key={movie.id} style={{
                border: "1px solid black",
                padding: "20px",
                margin: "10px",
                borderRadius: "10px",
                width: "20%",
                height: "200px"
              
              }}>
                <h1>{movie.movie}</h1>
                <img src={movie.image} alt="" />
                <p>{movie.overview}</p>
                <a href={movie.imdb_url}>Movie Url</a>
              </div>
            )
          })
        }


      </div>
    </>
  );
}

export default Effect;
