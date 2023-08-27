require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const worksheetRoutes = require("./routes/worksheetRoutes");

const app = express();

const MONGODB_URI =
  "mongodb+srv://uahtsham27:admin@cluster0.fg5ucrw.mongodb.net/;";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.json());
app.use("/api/worksheets", worksheetRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
