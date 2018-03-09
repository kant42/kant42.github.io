mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvdXJ5YXNodWtsYSIsImEiOiJjamR5ajE2NTAwbTZpMzNqcnVndzh2dTJxIn0.AJ8EV6db3uJV93dX3lZYjQ';

var chapters = {
    'intro': {
        center: [81.8, 23.88],
        zoom: 4,
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
    'north1': {
    	center: [77.214,26.702],
    	zoom: 7.3,
    	bearing: 100,
    	pitch: 60,
    },
    'north2': {
    	center: [81.774,25.904],
    	zoom: 7.3,
    	bearing: 100,
    	pitch: 60,
    },
    'central':{
    	center: [77.964,22.078],
    	zoom: 7.1,
    	bearing: 0,
    	pitch: 0,
    },
    'gujarat':{
    	center: [71.619,22.169],
    	zoom: 6.9,
    	bearing: -92,
    	pitch: 60,
    },
    'south1':{
    	center: [81.524,16.681],
    	zoom: 6.7,
    	bearing: -108.3,
    	pitch: 56.5,
    },
    'south2':{
    	center: [76.811,11.746],
    	zoom: 6.9,
    	bearing: 166.60,
    	pitch: 60,
    },
    'kolkata': {
    	center: [88.809,22.496],
    	zoom: 7.5,
    	bearing: 0,
    	pitch: 60,
    },
    'conclusion': {
        center: [80.781,18.127],
        zoom: 4.5,
        bearing: 0.48,
        pitch: 45.5,
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