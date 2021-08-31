const initiator = document.querySelector("#game__play-initiator")
const target = document.querySelector(".game__play-circle")
const area = document.querySelector(".game__play")
const score = document.querySelector(".game__score")
const perCent = document.querySelector(".game__percentage")
const instructions = document.querySelector(".game__instructions")

// removes blue and starts game
initiator.addEventListener("click", () => {
    initiator.style.display = "none"
    target.style.display = ""

});

//randomly moves the target circle
target.addEventListener("click", mover);
function mover () {
    target.style.position = "absolute";
    target.style.bottom = Math.floor(Math.random()*80)+'%';
    target.style.left = Math.floor(Math.random()*80)+'%';
}

//makes game last 10 clicks
let divClicks = 0;
target.addEventListener("click", () => {
    divClicks ++;
    if(divClicks === 15){
        target.style.display = "none";
    }
});

//shows reaning clicks until game ends
let remain=15
target.addEventListener('click', () =>{
    remain --;
    perCent.innerHTML = `remaining: ${remain}`;
});

// removes instructions & makse remaining counter visible
initiator.addEventListener('click', show);
function show(){
    perCent.style.display = ""
    instructions.style.display = "none"
    perCent.innerHTML = `Remaining: 15`
    if(divClicks ===15){
        perCent.style.display = 'none'
    }
}

//starts timer
const timeInMs = target.addEventListener('click', startTimer());
function startTimer(){
    startTime = new Date();
    target.onclick = function(){
        getTime(startTime)
    }
}
function getTime(startTime){
    const endTime = new Date();
    const timer = endTime - startTime;
    const avgTime = timer/15
    if(divClicks === 15){
        score.style = ""
        score.innerHTML += `${avgTime}ms `
    }
}