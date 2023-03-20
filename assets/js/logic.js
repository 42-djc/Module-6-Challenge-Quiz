const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionsScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");
const timerEl = document.querySelector("#time");

let timeLeft = 60; // change this to however long you want the quiz to be in seconds
let questionIndex = 0;

startButton.addEventListener("click", function() {
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  displayQuestion();
  startTimer();
});

function displayQuestion() {
  let question = questions[questionIndex];
  questionTitle.textContent = question.question;
  choicesEl.innerHTML = "";
  question.choices.forEach(function(choice) {
    let button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("class", "choice");
    button.setAttribute("value", choice);
    button.addEventListener("click", checkAnswer);
    choicesEl.appendChild(button);
  });
}

function checkAnswer(event) {
  let selectedAnswer = event.target.value;
  let question = questions[questionIndex];
  if (selectedAnswer === question.correctAnswer) {
    // display feedback for correct answer
  } else {
    // display feedback for incorrect answer
    timeLeft -= 10;
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    displayQuestion();
  } else {
    // end the quiz
  }
}

function startTimer() {
  let timer = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      // end the quiz
    }
  }, 1000);
}
