//declare DOM ID and classes
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionsScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");
const feedbackEl = document.querySelector("#feedback");
const finalScoreEl = document.querySelector("#final-score");
const initialsEl = document.querySelector("#initials");  
const timerArea = document.querySelector(".timer");  

//sets variables
let timer = 60;
let currentQuestion = 0;  
let finalScore = 0;
//let intervalId;

//click event to hide start screen, show questions and start timer.
startButton.addEventListener("click", function() {
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  startTimer();
  showQuestion();
});

function showQuestion() {

   //Check if there are more questions
   if (currentQuestion >= questions.length) {
    endQuiz();
    return;
  }

  // Display the current question
  const question = questions[currentQuestion];
  questionTitle.textContent = question.question;
  choicesEl.innerHTML = "";

  // Display the answer choices for the current question using a for loop and a click event to check answers
  for (let i = 0; i < question.choices.length; i++) {
    const choice = question.choices[i];
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", function() {
      checkAnswer(this, question.correctAnswer);
    });
    choicesEl.appendChild(li);
  }
}
//checks selected answer vs expected and feeds back.  reduces time if wrong.
function checkAnswer(li, correctAnswer) {
  if (li.textContent === correctAnswer) {
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = "Wrong!";
    timer -= 10;
    if (timer < 0) {
      timer = 0;
    }
  }
  feedbackEl.classList.remove("hide");
  currentQuestion++;
  showQuestion();
}

//clearInterval(intervalId)

// countdown
document.getElementById("time").innerHTML = timer;

// Start timer
function startTimer() {
  intervalId = setInterval(function() {
    timer--;
    document.getElementById("time").innerHTML = timer;
    if (timer <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(intervalId);
  questionsScreen.classList.add("hide");
  let finalScore = timer;
  finalScoreEl.textContent = timer;
  initialsEl.value = "";
  time.classList.add("hide");
  document.querySelector("#end-screen").classList.remove("hide");
}

