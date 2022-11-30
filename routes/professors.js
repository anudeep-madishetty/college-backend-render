const express = require("express");
const router = express.Router();

const Professor = require("../models/professor");

router.post("/add", async (req, res) => {
  try {
    const dbres = await Professor.create(req.body);
    res.status(201).json({ message: "success" });
  } catch (e) {
    res.status(500).json({ message: "Failed to add data" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const dbres = await Professor.find();
    // console.log(dbres);
    res.status(201).json({ message: "success", data: dbres });
  } catch (e) {
    res.status(500).json({ message: "Failed to get data" });
  }
});

module.exports = router;
