const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const worksheetSchema = new Schema({
  question: { type: String, required: true },
  options: [{ option: String, correct: Boolean }],
});

const Worksheet = mongoose.model("Worksheet", worksheetSchema);

module.exports = Worksheet;
