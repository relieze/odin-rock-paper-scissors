// returns random number which is converted into computer's choice
function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  return num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors";
}

// compares choices of player and computer to determine winner
// return outcome: true(win), false(loss), or tie
function playRound(playerSelection, computerSelection, round) {
  if (playerSelection === computerSelection) return "tie";

  // "outcome" is true if player's choice beats computer's choice
  // false if none of the expressions are true, player's choice loses
  let outcome =
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock");

  // print who won based on outcome's boolean value
  console.log(
    outcome
      ? `Round ${round}: You win! ${playerSelection} beats ${computerSelection}.`
      : `Round ${round}: You Lose! ${computerSelection} beats ${playerSelection}.`
  );

  return outcome;
}

// run a whole game
function game() {
  // accumlating counter; goes up everytime the user wins a round
  let win = 0;

  // run five rounds, prompting user for their choice, and receiving computer's choice
  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt("Rock, Paper, or Scissors? ");
    let computerSelection = getComputerChoice();

    // reformat user's choice for capitalization
    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    // run function to determine outcome
    const outcome = playRound(playerSelection, computerSelection, round);

    // if a tie, round is repeated 
    // if user wins the round, "win" is incremented
    if (outcome === "tie") {
      round--;
      console.log("You tied! Go again!");
    } else {
      win += outcome;
    }

    // ends loop if either the computer or user has the necessary 3 wins
    if (win === 3 || win === round - 3) break;
  }

  return win;
}

// prints final message based on outcome: either a win or loss
console.log(
  game() === 3 ? "YOU WON!!!!!" : "Awww, you lost... Better luck next time!"
);
