const mongoose = require("mongoose");
const professorSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  gender: {
    required: true,
    type: String,
  },
  department: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Professor", professorSchema);
