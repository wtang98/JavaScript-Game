const initiator = document.querySelector("#game__play-initiator")
const target = document.querySelector(".game__play-circle")
const area = document.querySelector(".game__play")
const score = document.querySelector(".game__score")

initiator.addEventListener("click", () => {
    initiator.style.display = "none"
    target.style.display = ""
});

target.addEventListener("click", mover)
function mover() {
    target.style.position = "absolute";
    target.style.top = Math.floor(Math.random()*80)+'%';
    target.style.left = Math.floor(Math.random()*80)+'%';
}

let divClicks = 0;
target.addEventListener("click", () => {
        divClicks +=1;
    if(divClicks === 10){
        target.style.display = "none";
        score.innerHTML = `Your Reaction Time is: ${timeDiff}`
    }
});

function timer (){

}