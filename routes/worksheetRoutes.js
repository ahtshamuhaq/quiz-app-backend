const express = require("express");
const Worksheet = require("../models/Worksheet");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const newWorksheet = new Worksheet(req.body);
    await newWorksheet.save();
    res.status(201).json(newWorksheet);
  } catch (error) {
    console.error("Error while saving worksheet:", error);
    res.status(400).json({ message: error.message, details: error });
  }
});

router.delete("/clear", async (req, res) => {
  try {
    await Worksheet.deleteMany({});
    res.status(200).json({ message: "All questions deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const worksheets = await Worksheet.find();
    res.json(worksheets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
