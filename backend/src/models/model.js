const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const ToDomodel = new mongoose.model("TODO", ToDoSchema); // "TODO" is model ka naam

module.exports = ToDomodel;

/* In mongodb database>>collection>>documents 
  >> means it consists of various*/
