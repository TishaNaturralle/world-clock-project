
function updateTime(){

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

//Harare
let harareElement = document.querySelector("#harare");
let harareDateElement = harareElement.querySelector(".date");
let harareTimeElement = harareElement.querySelector(".time");
let harareTime = moment().tz("Africa/Harare");

harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
harareTimeElement.innerHTML = harareTime.format("h:mm:ss [<small>]A[</small>]");

//Zurich
let zurichElement = document.querySelector("#zurich");
let zurichDateElement = zurichElement.querySelector(".date");
let zurichTimeElement = zurichElement.querySelector(".time");
let zurichTime = moment().tz("Australia/Perth");

zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
zurichTimeElement.innerHTML = zurichTime.format("h:mm:ss [<small>]A[</small>]");



updateTime();
setInterval(updateTime, 1);}