const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const students = [
//  {id:1,name:"Muthu"},
 {id:2,name:"Arun"},
 {id:3,name:"Kumar"},
 {id:4,name:"Rahul"}
];

app.get("/api/students",(req,res)=>{

 res.json(students);

});

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});