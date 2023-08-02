// returns choice based on random number 
function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  return num == 1 ? "Rock" : num == 2 ? "Paper" : "Scissors";
};

console.log(getComputerChoice());

