import React from "react";
import "./Card.css";

function Card(props){

 return(

  <div className="card">

    <h2>{props.name}</h2>

    <p>Department: {props.department}</p>

    <p>Year: {props.year}</p>

  </div>

 );

}

export default Card;