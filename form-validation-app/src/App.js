import React, { useState } from "react";
import "./App.css";

function App() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    // Validation
    if(name === ""){
      setError("Name is required");
      return;
    }

    if(!email.includes("@")){
      setError("Invalid Email Address");
      return;
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    }

    try{

      const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      if(response.ok){
        setSuccess("Form submitted successfully");
        setName("");
        setEmail("");
        setPassword("");
      }
      else{
        setError("Submission failed");
      }

    }
    catch(err){
      setError("Server Error");
    }

  };

  return (

    <div className="container">

      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>

      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

    </div>

  );
}

export default App;