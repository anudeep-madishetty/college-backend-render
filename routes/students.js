const express = require("express");
const router = express.Router();

const Student = require("../models/student");

router.post("/add", async (req, res) => {
  try {
    const data = await Student.create(req.body);
    res.status(200).json({ message: "success" });
  } catch (e) {
    res.status(500).json({ message: "failure" });
  }
});

router.get("/all", async (req, res) => {
  try {
    let data = await Student.find();
    res.send(data);
  } catch (e) {
    res.status(500).json({ message: "failed" });
  }
});

router.delete("/delete/:rollNumber", async (req, res) => {
  let roll = req.params.rollNumber;
  console.log(roll);
  try {
    let dbRes = await Student.deleteOne({ rollNumber: roll });
    res.status(200).json({ message: `deleted ${roll}` });
  } catch (e) {
    res.status(500).json({ message: "failed to delete" });
  }
});

// router.get("/all", (req, res) => {
//   res.status(400).json({ status: "get api" });
// });

// router.post("/all", (req, res) => {
//   console.log(req.body);
//   res.status(400).json({ status: "POst api" });
// });

module.exports = router;
