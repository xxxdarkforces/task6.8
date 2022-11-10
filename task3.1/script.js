const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl3.style.background = ('#000');
    trafficLightEl1.style.background = ('green');
    document.removeEventListener('click', makeGreen);
    document.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl1.style.background = ('#000');
    trafficLightEl2.style.background = ('yellow');
    document.removeEventListener('click', makeYellow);
    document.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl2.style.background = ('#000');
    trafficLightEl3.style.background = ('red');
    document.removeEventListener('click', makeRed);
    document.addEventListener('click', makeGreen);
}

document.addEventListener('click', makeGreen);