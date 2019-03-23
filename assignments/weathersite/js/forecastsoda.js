let forecastRequest = new XMLHttpRequest();
let forecastApiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=42d6bbc0dbb40553acb5d9e30bd65e8a';
forecastRequest.open('Get', forecastApiURLstring, true);
forecastRequest.send();

function getDay(apiDay) {
  var dayDate = new Date(apiDay);
  var day = dayDate.getDay();
  var dayOfWeek;
  switch (day) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    default:
      break;
  }
  return dayOfWeek;
}

forecastRequest.onload = function () {
  let forecastData = JSON.parse(forecastRequest.responseText);
  console.log(forecastData);

  var imageWeather = "http://openweathermap.org/img/w/";
  var forecastArray = forecastData.list;
  var dayOne, dayTwo, dayThree, dayFour, dayFive;
  var z = 0;

  for (var i = 0; i < forecastArray.length; i++) {
    var x = forecastData.list[i].dt_txt;
    var y = x.includes('18:00:00');
    if (y == true) {
      switch (z) {
        case 0:
          dayOne = forecastData.list[i];
          break;
        case 1:
          dayTwo = forecastData.list[i];
          break;
        case 2:
          dayThree = forecastData.list[i];
          break;
        case 3:
          dayFour = forecastData.list[i];
          break;
        case 4:
          dayFive = forecastData.list[i];
          break;
        default:
          break;
      }
      z++;
    }
  }

  document.getElementById("day1").innerHTML = getDay(dayOne.dt_txt);
  document.getElementById("day2").innerHTML = getDay(dayTwo.dt_txt);
  document.getElementById("day3").innerHTML = getDay(dayThree.dt_txt);
  document.getElementById("day4").innerHTML = getDay(dayFour.dt_txt);
  document.getElementById("day5").innerHTML = getDay(dayFive.dt_txt);

  document.getElementById("high1").innerHTML = dayOne.main.temp_max + "&deg;";
  document.getElementById("high2").innerHTML = dayTwo.main.temp_max + "&deg;";
  document.getElementById("high3").innerHTML = dayThree.main.temp_max + "&deg;";
  document.getElementById("high4").innerHTML = dayFour.main.temp_max + "&deg;";
  document.getElementById("high5").innerHTML = dayFive.main.temp_max + "&deg;";

}