// returns random choice; taken as computer's choice
function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  return num == 1 ? "Rock" : num == 2 ? "Paper" : "Scissors";
}

// compares choices of player and computer to determine winner
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (playerSelection == computerSelection) return "You Tied!";

  let playerWin =
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock");

  return playerWin
    ? `You win! ${playerSelection} beats ${computerSelection}`
    : `You Lose! ${computerSelection} beats ${playerSelection}`;
}

// run a whole game
function game() {
  // run five rounds, prompting user for their choice, and receiving computer's choice
  for (round = 1; round <= 5; round++) {
    let playerSelection = prompt("Rock, Paper, or Scissors? ");
    let computerSelection = getComputerChoice();

    // if choice are he same, round is reset
    if (playRound(playerSelection, computerSelection) == "You Tied!") {
      round--;
      console.log("You tied! Go again!");
      continue;
    }
    console.log(
      `Round ${round}: ${playRound(playerSelection, computerSelection)}`
    );
  }
}

game();
