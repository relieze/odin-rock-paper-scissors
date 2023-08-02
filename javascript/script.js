// returns choice based on random number
function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  return num == 1 ? "Rock" : num == 2 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) return "You Tied!";

  if (playerSelection == "rock") {
    return computerSelection == "scissors"
      ? "You win! Rock beats Scissors!"
      : "You Lose! Paper beats Rock!";
  };

  if (playerSelection == "scissors") {
    return computerSelection == "paper"
      ? "You win! Scissors beats Paper!"
      : "You Lose! Rock beats Scissors!";
  };

  if (playerSelection == "paper") {
    return computerSelection == "rock"
      ? "You win! Paper beats Rock!"
      : "You Lose! Scissors beats Paper!";
  };
};

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
