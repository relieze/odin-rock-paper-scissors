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
  const roundMessage = document.querySelector(".roundMessage");
  roundMessage.textContent = 
    outcome
      ? `Round ${round}: You win! ${playerSelection} beats ${computerSelection}.`
      : `Round ${round}: You Lose! ${computerSelection} beats ${playerSelection}.`
  ;

  return outcome;
}

const rpsBtns = document.querySelectorAll(".buttons button");
rpsBtns.forEach(btn => btn.addEventListener("click", handlePlayerChoice));

let round = 1, roundsWon = 0;

function handlePlayerChoice(event) {
  let outcome = playRound(event.target.classList[0], getComputerChoice(), round);

  // if a tie, round is repeated 
  if (outcome === "tie") {
    round--;
    document.querySelector(".roundMessage").textContent = "You tied! Go again!";
  } else roundsWon += outcome;
  
  // end and display winner if 3 rounds are won by either contender
  if (roundsWon === 5 || roundsWon === round - 5) {
    rpsBtns.forEach(btn => btn.removeEventListener("click", handlePlayerChoice));
    document.querySelector(".gameOver").textContent = 
      roundsWon === 5 ? "YOU WON!!!!!" : "Awww, you lost... Better luck next time!"
  }

  updateScore();
  round ++;
};

function updateScore() {
  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector(".computerScore");
  playerScore.textContent = `Player Score: ${roundsWon}`;
  computerScore.textContent = `Computer Score: ${round - roundsWon}`;
}