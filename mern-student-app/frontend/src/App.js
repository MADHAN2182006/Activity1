import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [name,setName] = useState("");
  const [mark,setMark] = useState("");
  const [students,setStudents] = useState([]);

  const addStudent = async () => {

    await axios.post("http://localhost:5000/addStudent",{
      name:name,
      mark:mark
    });

    loadStudents();

    setName("");
    setMark("");
  };

  const loadStudents = async () => {

    const res = await axios.get("http://localhost:5000/students");

    setStudents(res.data);
  };

  useEffect(()=>{
    loadStudents();
  },[]);

  return (

    <div className="container">

      <h1 className="title">Student Management System</h1>

      <div className="form-card">

        <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        type="number"
        placeholder="Enter Mark"
        value={mark}
        onChange={(e)=>setMark(e.target.value)}
        />

        <button onClick={addStudent}>
          Add Student
        </button>

      </div>

      <div className="student-list">

        {students.map((s)=>(
          <div className="student-card" key={s._id}>

            <h3>{s.name}</h3>
            <p>Mark : {s.mark}</p>

          </div>
        ))}

      </div>

    </div>

  );
}

export default App;