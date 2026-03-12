import React, { useState } from "react";
import InputBox from "./InputBox";
import Display from "./Display";
import "../styles/style.css";

function Parent() {

 const [name, setName] = useState("");

 return (
   <div className="container">

      <header className="header">
        <h1>Student React Application</h1>
        <p>Reusable Components using State Lifting</p>
      </header>

      <div className="card">

        <InputBox setName={setName}/>
        <Display name={name}/>

      </div>

   </div>
 );
}

export default Parent;