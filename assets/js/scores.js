   const highscoresList = document.getElementById("highscores");
   const clearButton = document.querySelector("#clear");

window.onload = function() {
 
  
    // Pull info from local storage
    const highscores = JSON.parse(localStorage.getItem("highScores")) || [];

  
    // Render high scores in high scores list
    highscoresList.innerHTML = highscores
      .map(score => {
        return `<li>${score.initials} - ${score.score}</li>`;
      })
      .join("");
  };
  

clearButton.addEventListener("click", function() {
  localStorage.removeItem("highScores");
  location.reload();
});