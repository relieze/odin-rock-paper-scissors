// returns random number which is converted into computer's choice
function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  return num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors";
}

// compares choices of player and computer to determine winner
// return outcome: true(win), false(loss), or tie
function playRound(playerSelection, computerSelection, round) {
  if (playerSelection === computerSelection) return "tie";

  // "outcome" = true if user wins round, false otherwise
  let outcome =
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock");

  // print winner of round based on "outcome"
  console.log(
    outcome
      ? `Round ${round}: You win! ${playerSelection} beats ${computerSelection}.`
      : `Round ${round}: You Lose! ${computerSelection} beats ${playerSelection}.`
  );

  return outcome;
}

function game() {
  let roundsWon = 0;

  // run five rounds, prompting user for their choice, and receiving computer's choice
  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt("Rock, Paper, or Scissors? ");
    let computerSelection = getComputerChoice();

    // reformat user's choice for capitalization
    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    const outcome = playRound(playerSelection, computerSelection, round);

    // if a tie, round is repeated 
    if (outcome === "tie") {
      round--;
      console.log("You tied! Go again!");
    } else {
      roundsWon += outcome;
    }

    if (roundsWon === 3 || roundsWon === round - 3) break;
  }

  return roundsWon;
}

console.log(
  game() === 3 ? "YOU WON!!!!!" : "Awww, you lost... Better luck next time!"
);
