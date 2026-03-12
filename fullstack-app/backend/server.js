const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // allow React to access API
app.use(express.json());

const students = [
 {id:1,name:"Madhan"},
 {id:2,name:"Arun"},
 {id:3,name:"Kumar"}
];

// API route
app.get("/api/students",(req,res)=>{

 try{

   res.json(students);

 }
 catch(error){

   res.status(500).json({
    message:"Server Error"
   });

 }

});

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});