const computer_Points = document.getElementById("computerPoints");
const player_Points = document.getElementById("playerPoints");
const draw_Points = document.getElementById("drawPoints");

const current_Computer_Play = document.getElementById("currentComputerPlay");
const current_Player = document.getElementById("currentPlayer");

const rockId = document.getElementById("rock");
const paperId = document.getElementById("paper");
const scissorsId = document.getElementById("scissors");

let computerScore = 0;
let playerScore = 0;
let drawScore = 0;

function play() {
  const playerOptions = [rockId, paperId, scissorsId];
  const computerOptions = ["✊", "✋", "✌"];

  playerOptions.forEach((options) => {
    options.addEventListener("click", function () {
      let player = options.textContent;
      current_Player.textContent = player;

      const choiceNumber = Math.floor(Math.random() * 3);
      const computerValue = computerOptions[choiceNumber];

      current_Computer_Play.textContent = computerValue;
      results(player, computerValue);
    });
  });
}

const results = (player, computer) => {
  const gameResults = document.getElementById("results");

  if (player === computer) {
    gameResults.textContent = "draw";
    drawScore++;
    draw_Points.textContent = drawScore;
  } else if (player === "✌") {
    if (computer === "✋") {
      gameResults.textContent = "player wins";
      playerScore++;
      player_Points.textContent = playerScore;
    } else {
      gameResults.innerText = "computer wins";
      computerScore++;
      computer_Points.textContent = computerScore;
    }
  } else if (player === "✊") {
    if (computer === "✌") {
      gameResults.textContent = "player wins";
      playerScore++;
      player_Points.textContent = playerScore;
    } else {
      gameResults.innerText = "computer wins";
      computerScore++;
      computer_Points.textContent = computerScore;
    }
  } else if (player === "✋") {
    if (computer === "✊") {
      gameResults.textContent = "player wins";
      playerScore++;
      player_Points.textContent = playerScore;
    } else {
      gameResults.innerText = "computer wins";
      computerScore++;
      computer_Points.textContent = computerScore;
    }
  }
};

play();
