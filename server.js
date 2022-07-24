// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const app = express();
// Start up an instance of app
const cors = require("cors");
app.use(cors());
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

// spin up server
const port = 3000;

const server = app.listen(port, () => {
  console.log(`your local Host run on: http://localhost:${port}`);
});

// Setup Server
app.get("/all", (req, res) => {
  res.send(projectData);
});

// Get Route
app.post("/add", (req, res) => {
  projectData = req.body;
});
