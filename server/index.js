// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the ticket booking API!");
});

// Routes for bus ticket booking
app.post("/bus/book", (req, res) => {
  const { source, destination, date, seats } = req.body;
  // Implement booking logic here
  res.json({ success: true, message: "Bus ticket booked successfully" });
});

// Routes for train ticket booking
app.post("/train/book", (req, res) => {
  const { source, destination, date, seats } = req.body;
  // Implement booking logic here
  res.json({ success: true, message: "Train ticket booked successfully" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
