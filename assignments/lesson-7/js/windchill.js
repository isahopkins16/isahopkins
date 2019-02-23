function doInputOutput() {
    var text1 = document.getElementById('tempBox').value;
    var text2 = document.getElementById('speedBox').value;
    var tempF = parseFloat(text1);
    var speed = parseFloat(text2);
    var w = windChill(tempF, speed);
    document.getElementById('outputDiv').innerHTML = w;
}

function windChill(tempF, speed) {
    var w = (35.74 + (.6215 * tempF)) - (35.75 * (Math.pow(speed, .16))) + (.4275 * tempF * (Math.pow(speed, .16)));
    return w;
}
