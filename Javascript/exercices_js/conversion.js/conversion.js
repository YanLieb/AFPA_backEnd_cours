function convCelsius() {

let celsius = document.getElementById('tempCelsius').value;
let fahrenheit = celsius * 9 / 5 + 32;

document.getElementById('celsius1').innerHTML = celsius + ' °C';
    document.getElementById('fahrenheit1').innerHTML = fahrenheit.toFixed(1) + ' °F';
    
}

function convFahrenheit() {

let fahrenheit = document.getElementById('tempFahrenheit').value;
let celsius = (fahrenheit - 32) * 5 / 9;

document.getElementById('fahrenheit2').innerHTML = fahrenheit + ' °F';
    document.getElementById('celsius2').innerHTML = celsius.toFixed(1) + ' °C';

}