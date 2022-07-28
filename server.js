// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// spin up server
const port = 3000;

const server = app.listen(port, () => {
  console.log(`your local host link is: http://localhost:${port}`);
});

// Setup Server

// get Data 
app.get('/all', (req, res) => {
  res.send(projectData);
});

// post Data
app.post('/addnew', (req, res) => { 
  projectData = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content,
  };
  res.send(projectData);
});
