
"use strict";

function getRandomColor() {
    document.documentElement.style.setProperty('--blade-color', `${getRandomInt(10, 1000)}`);
}

getRandomColor();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById("darksaber").addEventListener('click', () => {
    document.getElementById("title").classList.toggle('active');
})
