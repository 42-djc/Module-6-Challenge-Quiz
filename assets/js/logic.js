//declare DOM ID and classes

const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionsScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");


startButton.addEventListener("click", function() {
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    startTimer();    
  });

//clearInterval(intervalId)

// countdown 
// Set initial timer value

let timer = 60;
document.getElementById("time").innerHTML = timer;

// Start timer
function startTimer() {
  let intervalId = setInterval(function() {
    timer--;
    document.getElementById("time").innerHTML = timer;
    if (timer <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

