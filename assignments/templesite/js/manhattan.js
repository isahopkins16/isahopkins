let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=42d6bbc0dbb40553acb5d9e30bd65e8a';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  document.getElementById('temp').innerHTML = weatherData.main.temp_max;

  let temp =  weatherData.main.temp_max;

}
