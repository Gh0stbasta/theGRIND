const server = "localhost:3000";
let guessCounter = 0;

const userGuess = document.getElementById("user-guess");
const btnGuess = document.getElementById("btn-guess");
const guesses = document.getElementById("guesses");

//guessing part
btnGuess.addEventListener("click", () => {
  const guess = userGuess.value;
  fetch(`http://${server}/gamenumber`)
    .then((response) => response.json())
    .then((data) => {
      const gameNumber = data.gameNumber;
      if (parseInt(guess) === gameNumber) {
        guesses.innerHTML = `You did it in ${++guessCounter} guesses`;
      } else {
        guessCounter++;
        guesses.innerHTML = `Try again! Guesses so far: ${guessCounter}`;
      }
    });
});

//enter score part
const playerName = document.getElementById("player-name");
const btnSaveScore = document.getElementById("btn-save-score");
btnSaveScore.addEventListener("click", () => {
  const name = playerName.value;
  const score = guessCounter;

  fetch(`http://${server}/leaderboard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, score }),
  })
    .then((response) => response.json())
    .then((data) => {
      leaderboard.innerHTML = "Score saved!";
    });
  //show leaderboard after half a second
  setTimeout(updateLeaderboard, 500);
});

function updateLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");
  fetch(`http://${server}/leaderboard`)
    .then((response) => response.json())
    .then((data) => {
      leaderboard.innerHTML = "";
      data.forEach((entry) => {
        const li = document.createElement("li");
        li.textContent = `${entry.name}: needed ${entry.score} guesses`;
        leaderboard.appendChild(li);
      });
    });
}

// Optionally call updateLeaderboard() on page load
updateLeaderboard();
