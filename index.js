// function to change date

function currentDate(date) {
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let thatDay = days[day];
  
    let hours = date.getHours();
  
    let minutes = date.getMinutes();
  
    return `${thatDay} ${hours}: ${minutes} `;
  }
  
  let timer = document.querySelector("#date");
  let current = new Date();
  timer.innerHTML = currentDate(current);



  // function that updates by city name
  function showNow(response) {


    let changeTemp=document.querySelector("#temp")
    changeTemp.innerHTML= Math.round(response.data.main.temp)+"°C"
    
    let changeCity= document.querySelector("#cityR")
    changeCity.innerHTML=response.data.name
  
    let changePrecipitation=document.querySelector(".prep")
    changePrecipitation.innerHTML=response.data.weather[0].description
  
    let changeHumidity=document.querySelector(".hum")
    changeHumidity.innerHTML=response.data.main.humidity +"%"
  
    let changeWind=document.querySelector(".windy")
    changeWind.innerHTML=response.data.wind.speed +"km/h"
  
  }


  function search(event) {
      event.preventDefault();
    
  let key = "d987c3e70953ea07826bfce27d61b157";
  let apiurl = "https://api.openweathermap.org/data/2.5/weather?";
  let city = document.getElementById("city-name").value;
  let url = `${apiurl}&q=${city}&appid=${key}&units=metric`;

  axios.get(url).then(showNow);

  document.querySelector(".search").reset();

  }

  
  let sub = document.querySelector("#city-value");
  sub.addEventListener("click", search);
  
  


 
// function by coodinates

function showTemp(response) {

let changeTemp=document.querySelector("#temp")
changeTemp.innerHTML= Math.round(response.data.main.temp) +"°C"

let changeCity= document.querySelector("#cityR")
changeCity.innerHTML=response.data.name

let changePrecipitation=document.querySelector(".prep")
changePrecipitation.innerHTML=response.data.weather[0].description

let changeHumidity=document.querySelector(".hum")
changeHumidity.innerHTML=response.data.main.humidity +"%"

let changeWind=document.querySelector(".windy")
changeWind.innerHTML=response.data.wind.speed +"km/h"
 }


 function searchCurrent(event) {
  event.preventDefault();


function handlePosition(position) {
  let lati = position.coords.latitude;
  let longi = position.coords.longitude;
  let key = "d987c3e70953ea07826bfce27d61b157";
  let endpoint = "http://api.openweathermap.org/data/2.5/weather";
  let url = `${endpoint}?lat=${lati}&lon=${longi}&appid=${key}&units=metric`;

  axios.get(url).then(showTemp);


}

navigator.geolocation.getCurrentPosition(handlePosition);



}


let final = document.querySelector("#current-value");
final.addEventListener("click", searchCurrent);


