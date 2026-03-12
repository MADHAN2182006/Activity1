const express = require("express");
const router = express.Router();

let users = [];

// GET Users
router.get("/", (req, res) => {
 res.json(users);
});

// POST User with validation
router.post("/", (req, res) => {

 const { name, email } = req.body;

 if(!name || !email){
   return res.status(400).json({
    message:"Name and email required"
   });
 }

 if(!email.includes("@")){
   return res.status(400).json({
    message:"Invalid email format"
   });
 }

 const newUser = {
  id: users.length + 1,
  name,
  email
 };

 users.push(newUser);

 res.status(201).json(newUser);
});

module.exports = router;