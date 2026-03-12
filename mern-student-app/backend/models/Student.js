const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
 name:String,
 mark:Number
});

module.exports = mongoose.model("Student",StudentSchema);