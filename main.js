mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvdXJ5YXNodWtsYSIsImEiOiJjamR5ajE2NTAwbTZpMzNqcnVndzh2dTJxIn0.AJ8EV6db3uJV93dX3lZYjQ';

var chapters = {
    'intro': {
        center: [82.8, 23.88],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    },
    'delhi': {
        center: [77.1016, 28.6375],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'mumbai': {
        center: [72.8561, 19.0022],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'pune': {
    	center: [73.987,18.616],
    	zoom: 9.2,
    	bearing: 0,
    	pitch: 0,
    },
    'chennai': {
    	center: [80.239,13.146],
    	zoom: 9.42,
    	bearing: -23.20,
    	pitch: 50.50,
    },
    'kolkata': {
    	center: [88.809,22.496],
    	zoom: 7.5,
    	bearing: 0,
    	pitch: 60,
    },
    'conclusion': {
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/shouryashukla/cjeif24oq0pig2rpgrwdar53g',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'intro';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}