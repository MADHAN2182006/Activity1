const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Student model
const StudentSchema = new mongoose.Schema({
 name:String,
 mark:Number
});

const Student = mongoose.model("Student",StudentSchema);

// Add student API
app.post("/addStudent",async(req,res)=>{

 const student = new Student(req.body);

 await student.save();

 res.json({message:"Student Added"});
});

// Get students API
app.get("/students",async(req,res)=>{

 const data = await Student.find();

 res.json(data);
});

// start server
app.listen(5000,()=>{
 console.log("Server running on port 5000");
});