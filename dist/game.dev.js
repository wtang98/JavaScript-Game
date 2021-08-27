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

var divClicks = 0;
target.addEventListener("click", function () {
  divClicks += 1;

  if (divClicks === 5) {
    target.style.display = "none";
    alert('finished');
  }
}); // for (let index = 0; index < array.length; index++) {
// }
// target.forEach(timeInMs);

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

  if (divClicks < 5) {
    score.innerHTML += "".concat(timer, " ms, ");
  } else if (divClicks == 5) {
    score.innerHTML += "".concat(timer, " ms. ");
  }
} // const click1 = function(){ this doesnt work//
//     initiator.addEventListener("click", () =>{
//     let firstClick;
//     firstClick = new Date().getMilliseconds;
//     return firstClick;
//     });
// }
// const click2 = function(){
//     target.addEventListener("click", () =>{
//     let secondClick;
//     secondClick = new Date().getMilliseconds;
//     return secondClick;
//     });
// }
// const timer = Number(click1() - click2());
// const firstTime = function(){ this also doesnt work
//     target.addEventListener("click", (first) => {
//         first = new Date().getMilliseconds;
//     })
//     target.addEventListener("click",(second) =>{
//         second = new Date().getMilliseconds;
//     })
//     const timer = secondTime - firstTime;
//     console.log(timer);
// }