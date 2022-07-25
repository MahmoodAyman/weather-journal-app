/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// API
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const APIKey = ",&appid=bd10c15bae56c76cfc25506afc983f0e";
const server = "http://localhost:3000";

// dom elements
let zipCode = document.getElementById("zip");
let feeling = document.getElementById("feelings");
let submit = document.getElementById("generate");

document.getElementById("date").textContent = newDate;
let output = document.querySelector(".entry");
submit.addEventListener("click", function () {
  output.classList.toggle("show");
});
