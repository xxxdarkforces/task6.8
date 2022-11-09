const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl2.style.background = ('#000');
    trafficLightEl3.style.background = ('#000');
    trafficLightEl1.style.background = ('green');
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl1.style.background = ('#000');
    trafficLightEl3.style.background = ('#000');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl1.style.background = ('#000');
    trafficLightEl2.style.background = ('#000');
    trafficLightEl3.style.background = ('red');
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeGreen);
}

trafficLightEl1.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeGreen);
trafficLightEl3.addEventListener('click', makeGreen);