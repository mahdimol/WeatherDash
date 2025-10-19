//* Api Key

const input = document.querySelector("input");
const searchBtn = document.querySelector("#searchBtn");
const tempElem = document.querySelector(".temp");
const humidityElem = document.querySelector(".humidity");
const windElem = document.querySelector(".wind");
const pressureElem = document.querySelector(".pressure");
const weatherStatusElem = document.querySelector(".weather-status");

const showData = () => {
  const apiKey = "26c4d8ad14b57209671494df9bd9fcb9";
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  const cityName = input.value;

  fetch(`${baseUrl}?q=${cityName}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      tempElem.innerHTML = Math.floor(data.main.temp - 273.15);
      humidityElem.innerHTML = data.main.humidity;
      windElem.innerHTML = data.wind.speed;
      pressureElem.innerHTML = data.main.pressure;
      weatherStatusElem.innerHTML = data.weather.main;
    });
};

searchBtn.addEventListener("click", showData);
