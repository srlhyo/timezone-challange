const API_URL = `https://api.ipgeolocation.io/timezone?apiKey=3bc8d8fbdeb548cbae0820f85e56de84&tz=`;
let city = ["Europe/Paris", "America/New_York", "Europe/Moscow", "Asia/Shanghai", "America/Mexico_City"];

let parisTime = document.getElementById("parisTime");
let newyorkTime = document.getElementById("newyorkTime");
let moscowTime = document.getElementById("moscowTime");
let shanghaiTime = document.getElementById("shanghaiTime");
let mexicocityTime = document.getElementById("mexicocityTime");

let btnParis = document.getElementById("paris");
let btnNewyork = document.getElementById("newyork");
let btnMoscow = document.getElementById("moscow");
let btnShanghai = document.getElementById("shanghai");
let btnMexicocity = document.getElementById("mexicocity");

async function getData(e) {

     if (e.target.id == "paris") {
          const response = await fetch(API_URL + city[0]);
          const data = await response.json();
          const {
               time_24
          } = data;

          parisTime.textContent = time_24;
     } else if (e.target.id == "newyork") {
          const response = await fetch(API_URL + city[1]);
          const data = await response.json();
          const {
               time_24
          } = data;

          newyorkTime.textContent = time_24;
     } else if (e.target.id == "moscow") {
          const response = await fetch(API_URL + city[2]);
          const data = await response.json();
          const {
               time_24
          } = data;

          moscowTime.textContent = time_24;
     } else if (e.target.id == "shanghai") {
          const response = await fetch(API_URL + city[3]);
          const data = await response.json();
          const {
               time_24
          } = data;

          shanghaiTime.textContent = time_24;
     } else {
          const response = await fetch(API_URL + city[4]);
          const data = await response.json();
          const {
               time_24
          } = data;

          mexicocityTime.textContent = time_24;
     }

}


btnParis.addEventListener("click", function (e) {

     setInterval(function () {
          getData(e);
     }, 1000);
});
btnNewyork.addEventListener("click", function (e) {

     setInterval(function () {
          getData(e);
     }, 1000);
});
btnMoscow.addEventListener("click", function (e) {
    setInterval(function () {
          getData(e);
     }, 1000);
});
btnShanghai.addEventListener("click", function (e) {
    setInterval(function () {
          getData(e);
     }, 1000);
});
btnMexicocity.addEventListener("click", function (e) {
   setInterval(function () {
          getData(e);
     }, 1000);
});