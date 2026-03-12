import React,{useEffect,useState} from "react";
import axios from "axios";

function App(){

 const [students,setStudents] = useState([]);
 const [error,setError] = useState("");

 useEffect(()=>{

   axios.get("http://localhost:5000/api/students")

   .then(response=>{
      setStudents(response.data);
   })

   .catch(err=>{
      setError("Failed to fetch data");
   });

 },[]);

 return(

  <div>

   <h1>Student List</h1>

   {error && <p>{error}</p>}

   <ul>

    {students.map((s)=>(
      <li key={s.id}>{s.name}</li>
    ))}

   </ul>

  </div>

 );

}

export default App;