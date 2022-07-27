/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date;
let newDate = `${d.getMonth()} . ${d.getDate()} . ${d.getFullYear()}`;

// API URL and Key
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const APIKey = "&appid=bd10c15bae56c76cfc25506afc983f0e";
const server = "http://localhost:3000";

// dom elements
const zip = document.getElementById("zip");
const feeling = document.getElementById("feelings");
const submit = document.getElementById("generate");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const content = document.getElementById("content");
const city = document.getElementById("city_name");

// generate button event listener
submit.addEventListener("click", function (evt) {
  evt.preventDefault();
  const zipCode = zip.value;
  if (zipCode.lngth < 5||isNaN(zipCode)) { // to validate zip code
    alert("Please enter a valid zip code");
  } 
  getInfobyZip(zipCode).then((apiInfo) => {
    if (apiInfo.cod != "404") {
      let recivedData = {
        date: newDate,
        city: apiInfo.name,
        temp: Math.round(parseFloat(apiInfo.main.temp) - 273.15),
        content: feeling.value,
      };
      postData(`${server}/addnew`, recivedData);
      updatingDom();
    } else {
      alert("Please enter a valid zip code");
    }
  });
});

const getInfobyZip = async (zip) => {
  const res = await fetch(baseURL + zip + APIKey);
  try {
    const data = await res.json();
    console.log("getInfobyZip function",data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.  log("new data is " ,newData);
    return newData;
  } catch (err) {
    console.log("Something wrong Happen", err);
  }
};

const updatingDom = async () => {
  const response = await fetch(`${server}/all`);
  try {
    const data = await response.json();
    console.log(data);
    city.textContent = data.city;
    date.textContent = data.date;
    temp.textContent = data.temp;
    content.textContent = `you are ${feeling.value}`;
  } catch (err) {
    console.log("something wrong happen", err);
  }
};
