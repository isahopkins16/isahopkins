var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'; 

var request = new XMLHttpRequest(); 

request.open('GET', requestURL); 

request.responseType = 'json'; 
request.send(); 

request.onload = function() { 
var towndata = request.response; 
gettowndata(towndata) 
} 

function gettowndata(jsonObj){ 
var towns = jsonObj["towns"]; 

    for (var i= 0; i < towns.length; i++){
        var tName = towns[i].name;
        if (tName === "Preston") {
            var tName = document.createElement('h5');
            name.textContent = towns[i].name;
            var tMotto = document.createElement('h6');
            tMotto.textContent = towns[i].motto;
            var tYear = document.createElement('h6');
            tYear.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var tPopulation = document.createElement('h6');
            tPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var tRain = document.createElement('h6');
            tRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            document.getElementById("prestondata").appendChild(tName); 
            document.getElementById("prestondata").appendChild(tMotto); 
            document.getElementById("prestondata").appendChild(tYear); 
            document.getElementById("prestondata").appendChild(tPopulation); 
            document.getElementById("prestondata").appendChild(tRain); 
        }
       
        else if (name === "Soda Springs"){
            var tName = document.createElement('h5');
            tName.textContent = towns[i].name;
            var tMotto = document.createElement('h6');
            tMotto.textContent = towns[i].motto;
            var tYear = document.createElement('h6');
            tYear.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var tPopulation = document.createElement('h6');
            tPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var tRain = document.createElement('h6');
            tRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            document.getElementById("sodaspringsdata").appendChild(tName); 
            document.getElementById("sodaspringsdata").appendChild(tMotto); 
            document.getElementById("sodaspringsdata").appendChild(tYear); 
            document.getElementById("sodaspringsdata").appendChild(tPopulation); 
            document.getElementById("sodaspringsdata").appendChild(tRain);
        }
        
        else if (name === "Fish Haven"){
            var tName = document.createElement('h5');
            tName.textContent = towns[i].name;
            var tMotto = document.createElement('h6');
            tMotto.textContent = towns[i].motto;
            var tYear = document.createElement('h6');
            tYear.textContent = 'Year Founded: ' + towns[i].yearFounded;
            var tPopulation = document.createElement('h6');
            tPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
            var tRain = document.createElement('h6');
            tRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            document.getElementById("fishhavendata").appendChild(tName); 
            document.getElementById("fishhavendata").appendChild(tMotto); 
            document.getElementById("fishhavendata").appendChild(tYear); 
            document.getElementById("fishhavendata").appendChild(tPopulation); 
            document.getElementById("fishhavendata").appendChild(tRain);
        }
    }
} 
