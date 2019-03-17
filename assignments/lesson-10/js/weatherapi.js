let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

 document.getElementById('currentweather').innerHTML = weatherData.weather[0].main;

 document.getElementById('temp').innerHTML = weatherData.main.temp_max;

 document.getElementById('humid').innerHTML = weatherData.main.humidity;

 document.getElementById('windtemp').innerHTML = weatherData.main.temp;

 document.getElementById('windspeed').innerHTML = weatherData.wind.speed;

 document.getElementById('windchill').innerHTML = getwindchill();
}

function getwindchill() {
  var tempF = parseInt(document.getElementById('windtemp').innerHTML);
  var speed = parseInt(document.getElementById('windspeed').innerHTML);
  result = windchill(tempF, speed);
  return result;
  }
  
  function windchill(tempF, speed) {
  var windchillfactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
  var answer = windchillfactor.toFixed(2);
  
  return answer;
  }