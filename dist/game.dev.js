"use strict";

var initiator = document.querySelector("#game__play-initiator");
var target = document.querySelector(".game__play-circle");
var area = document.querySelector(".game__play");
var score = document.querySelector(".game__score");
var perCent = document.querySelector(".game__percentage");
var instructions = document.querySelector(".game__instructions"); // removes blue and starts game

initiator.addEventListener("click", function () {
  initiator.style.display = "none";
  target.style.display = "";
}); //randomly moves the target circle

target.addEventListener("click", mover);

function mover() {
  target.style.position = "absolute";
  target.style.bottom = Math.floor(Math.random() * 80) + '%';
  target.style.left = Math.floor(Math.random() * 80) + '%';
} //makes game last 10 clicks


var divClicks = 0;
target.addEventListener("click", function () {
  divClicks++;

  if (divClicks === 15) {
    target.style.display = "none";
  }
}); // removes instructions & makes remaining counter visible

initiator.addEventListener('click', show);

function show() {
  perCent.style.display = "";
  instructions.style.display = "none";
  perCent.innerHTML = "Remaining: 15";
} //counts down remaining clicks until game ends


var remain = 15;
target.addEventListener('click', function () {
  remain--;
  perCent.innerHTML = "remaining: ".concat(remain);

  if (divClicks === 15) {
    perCent.style.display = "none";
    score.classList.add("forceScoreCenter");
  }
}); //starts timer

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
  var avgTime = timer / 15;
  var avgTimeToTwoDp = parseFloat(avgTime).toFixed(2);

  if (divClicks === 15) {
    score.style = "";
    score.innerHTML += "".concat(avgTimeToTwoDp, "ms ");
  }
}