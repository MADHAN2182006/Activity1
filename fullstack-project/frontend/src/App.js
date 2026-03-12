import React,{useEffect,useState} from "react";
import axios from "axios";

function App(){

 const [students,setStudents] = useState([]);

 useEffect(()=>{

  axios.get("http://localhost:5000/api/students")

  .then(res=>{
    setStudents(res.data);
  })

  .catch(err=>{
    console.log("Error fetching data");
  });

 },[]);

 return(

  <div>

   <h1>Student List</h1>

   <ul>

   {students.map((student)=>(
    <li key={student.id}>
      {student.name}
    </li>
   ))}

   </ul>

  </div>

 );

}

export default App;