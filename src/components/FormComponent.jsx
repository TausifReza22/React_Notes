import React, { useState, useEffect } from "react";

function FormComponent() {
  // let [name,setName] = useState("");

  // const handleChange = (e)=>{
  //     setName(e.target.value)
  // }

//   let userobj = {
//       name:"Sghiu",
//       email:"ashd@gmai.com",
//       password:"1234"
//   }

 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    
  });

  const [submittedData, setSubmittedData] = useState(false)

//   const handleChange = (e) => {
//     setFormData({
//         ...formData,
//         name: e.target.value,
        
//     })
//   };

const handleChange = (e,name) => {
    setFormData({
        ...formData,
        [name]: e.target.value,
        
    })
  };

//   useEffect(() => {
//     console.log("Form Data", formData);
//     setFormData(formData)
//   }, [formData]);

  const handleEmailChange = (e) => {
    setFormData({
        ...formData,
        email: e.target.value,
        
    })
  }

    const handlePasswordChange = (e) => {
    setFormData({
        ...formData,
        password: e.target.value,
        
    })
}

const handleSubmit = (e)=>{
    e.preventDefault() //Prevent the default behaviour of the form
    console.log("Form Data",formData)

    setSubmittedData(true);
}

 
  return (
    <div>
      <h1>This is a form</h1>
      <form  onSubmit={(e)=>{
            handleSubmit(e)
      }}>
        <label htmlFor="name" >
          Enter the Username &nbsp;
          <input
            type="text"
            onChange={(event) => {
              handleChange(event, "name");
            }}
          />
        </label>
        <br />
        <label htmlFor="name">
          Enter the user email &nbsp;
          <input type="text"     onChange={(event) => {
                handleChange(event, "email");
            }}/>
        </label>
        <br />
        <label htmlFor="name">
          Enter the password &nbsp;
          <input type="password"      onChange={(event) => {
               handleChange(event, "password");
            }}/>
        </label>

        <button type="submit">Submit</button>
      </form>
      {
       submittedData?<h1>{formData.name}</h1>:null
      }
      
    </div>
  );
}

export default FormComponent;
