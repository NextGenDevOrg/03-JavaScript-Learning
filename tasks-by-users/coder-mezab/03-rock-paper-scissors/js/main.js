const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const draw = "DRAW";
const playerWins = "PLAYER WON";
const computerWins = "COMPUTER WON";

let gameIsRunning = false;

const getPlayerChoice = () => {
  let selection = prompt(
    `Rock, Paper or Scissors? 
  You can Also choose:
  1 . for ${ROCK}
  2 . for ${PAPER}
  3 . for ${SCISSORS}`,
    ""
  ).toLowerCase();

switch (selection){
  case 1:
    selection = ROCK;
    break;
  case 2:
    selection = PAPER;
    break;
  case 3:
    selection = SCISSORS;
}

  // if (selection === "1") {
  //   selection = ROCK;
  // } else if (selection === "2") {
  //   selection = PAPER;
  // } else if (selection === "3") {
  //   selection = SCISSORS;
  // }

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice, we choose ${ROCK} for you`);
    return ROCK;
  }
  return selection;
};

const getComputerChoice = () => {
  const choice = Math.random();
};
if (choice > 0.67) {
  return PAPER;
}
    else if (choice > 0.34) {
    return ROCK;
  } else {
    return SCISSORS;
  };


const result = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) {
    return draw;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return playerWins;
  } else {
    return computerWins;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = result(computerSelection, playerSelection);
  console.log(winner);
  let message = `You picked ${playerSelection}, Computer picked ${computerSelection}, Therefore you `;
  if (winner === draw) {
    message = `${message} have a draw.`;
  } else if (winner === playerWins) {
    message = `${message} + won!`;
  } else {
    message = `${message} + lost!`;
  }
  alert(`${message}`);
  gameIsRunning = false;
});
