var sectionte=document.querySelector('section.townevents');
var requestURL='https://byui-cit230.github.io/weather/data/towndata.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();
request.onload = function() {
var townEvents = request.response;
  showTownEvents(townEvents);
}

function showEvents(jsonObj){
    var eventsContainer = document.createElement('div');
    eventsContainer.setAttribute('class', 'mycontainer');
    var townevents = document.createElement('div');
    var title = document.createElement('eventstitle');
    title.textContent = "Local Events";
    townevents.appendChild(title);
                
    var townName=jsonObj['towns'];
    for (var i = 0; i < townName.length; i++) {
        var correctName = townName[i].name;
        if (correctName == "Preston"){ 
            for (var j = 0; j < townName[i].events.length; j++){
                var events = document.createElement('p');
                events.textContent = townName[i].events[j];
                townevents.appendChild(events);
            } continue;  
        }
        continue;
    }
    
    myContainer.appendChild(townevents);
    sectionte.appendChild(eventsContainer);
}