"use strict";

var initiator = document.querySelector("#game__play-initiator");
var target = document.querySelector(".game__play-circle");
var area = document.querySelector(".game__play");
var score = document.querySelector(".game__score");
var perCent = document.querySelector(".game__percentage");
initiator.addEventListener("click", function () {
  initiator.style.display = "none";
  target.style.display = "";
});
target.addEventListener("click", mover);

function mover() {
  target.style.position = "absolute";
  target.style.top = Math.floor(Math.random() * 80) + '%';
  target.style.left = Math.floor(Math.random() * 80) + '%';
}

var divClicks = 0;
target.addEventListener("click", function () {
  divClicks += 1;

  if (divClicks === 10) {
    target.style.display = "none";
    alert('finished');
  }
});
var timeInMs = target.addEventListener('click', startTimer());

function startTimer() {
  startTime = new Date();

  target.onclick = function () {
    getTime(startTime);
  };
}

function getTime(startTime) {
  var endTime = new Date();
  var timer = endTime - startTime;
  var avgTime = timer / 10;

  if (divClicks === 10) {
    score.innerHTML += "".concat(avgTime, "ms ");
  }
}