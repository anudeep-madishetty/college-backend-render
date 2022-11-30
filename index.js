const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const student = require("./routes/students");
const professor = require("./routes/professors");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://anudeep:anudeep@cluster0.mpvjrne.mongodb.net/college?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
    else console.log("connected");
  }
);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/students", student);
app.use("/professors", professor);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("app is listening on ", PORT);
});
