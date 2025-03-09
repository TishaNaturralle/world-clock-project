
function updateTime(){

//Paris
let parisElement = document.querySelector("#paris");
if (parisElement){
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

//Harare
let harareElement = document.querySelector("#harare");
if (harareElement) {
let harareDateElement = harareElement.querySelector(".date");
let harareTimeElement = harareElement.querySelector(".time");
let harareTime = moment().tz("Africa/Harare");

harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
harareTimeElement.innerHTML = harareTime.format("h:mm:ss [<small>]A[</small>]");
}

//Zurich
let zurichElement = document.querySelector("#perth");
if (zurichElement){
let zurichDateElement = zurichElement.querySelector(".date");
let zurichTimeElement = zurichElement.querySelector(".time");
let zurichTime = moment().tz("Australia/Perth");

zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
zurichTimeElement.innerHTML = zurichTime.format("h:mm:ss [<small>]A[</small>]");
}
}


function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.formnat("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    `;
}

updateTime()
setInterval(updateTime, 1)

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);