var speed = parseFloat(document.getElementById("windspeed").innerHTML);
var tempF = parseFloat(document.getElementById("temp").innerHTML);
var f = 35.74 + (0.6215 * tempF) - (35.75*(Math.pow(speed, 0.16))) + (0.4275*(tempF*(Math.pow(speed, 0.16))))
var answer = f.toFixed(2);
document.getElementById("windchill").innerHTML = answer;
