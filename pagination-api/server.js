const express = require("express");
const app = express();

const students = require("./data");

// API with pagination and filtering
app.get("/students", (req, res) => {

 const page = parseInt(req.query.page) || 1;
 const limit = parseInt(req.query.limit) || 3;
 const department = req.query.department;

 let filteredData = students;

 // Filtering
 if(department){
   filteredData = students.filter(
     s => s.department.toLowerCase() === department.toLowerCase()
   );
 }

 // Pagination
 const startIndex = (page - 1) * limit;
 const endIndex = page * limit;

 const paginatedData = filteredData.slice(startIndex, endIndex);

 res.json({
   page: page,
   limit: limit,
   totalRecords: filteredData.length,
   data: paginatedData
 });

});

app.listen(5000, () => {
 console.log("Server running on port 5000");
});