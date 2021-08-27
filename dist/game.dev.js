"use strict";

var initiator = document.querySelector("#game__play-initiator");
var target = document.querySelector(".game__play-circle");
var area = document.querySelector(".game__play");
var score = document.querySelector(".game__score");
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

var first;
target.addEventListener("click", timer);

function timer() {}

var divClicks = 0;
target.addEventListener("click", function () {
  divClicks += 1;

  if (divClicks === 10) {
    target.style.display = "none";
    score.innerHTML = "Your Reaction Time is: ".concat(timer);
  }
});