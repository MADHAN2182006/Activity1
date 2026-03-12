import React from "react";
import Card from "./components/Card";
import "./App.css";

function App(){

 return(

  <div className="container">

   <h1>Student Details</h1>

   <div className="card-container">

   <Card name="Muthu" department="CSE" year="3rd Year"/>
   <Card name="Arun" department="IT" year="2nd Year"/>
   <Card name="Kumar" department="ECE" year="4th Year"/>
   <Card name="Rahul" department="EEE" year="1st Year"/>

   </div>

  </div>

 );

}

export default App;