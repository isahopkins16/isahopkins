var aside = document.querySelector('aside');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townEvents = request.response;
    showEvents(townEvents);
}

function showEvents(jsonObj) {
    var eventsContainer = document.createElement('div');
    eventsContainer.setAttribute('class', 'mycontainer');
    var townevents = document.createElement('div');
    var title = document.createElement('h2');
    title.textContent = "Local Events";
    townevents.appendChild(title);

    var townName = jsonObj['towns'];
    console.log("data", townName)

    var correctName = document.getElementById("nameTown").textContent;
    console.log("correct Name:", correctName);
    for (var i = 0; i < townName.length; i++) {
        
        var eventsTown = townName[i].events;
        for (var j = 0; j < eventsTown.length; j++) {
            var events = document.createElement('p');
            var name = townName[i].name;
            if (name == correctName) {
                events.textContent = eventsTown[j];
                townevents.appendChild(events);
            }
        }

    }

    eventsContainer.appendChild(townevents);
    aside.appendChild(eventsContainer);
}