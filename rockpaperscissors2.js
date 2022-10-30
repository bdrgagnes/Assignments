function computerPlay() {
  let computer = Math.floor(Math.random() * 3);
  if (computer == 0) {
    return "Rock";
  } else if (computer == 1) {
    return "Paper";
  } else if (computer == 2) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Tie";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    return "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    return "You Lose! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    return "You Lose! Rock beats Scissors";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    return "You Win! Scissors beats Paper";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    return "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    return "You Win! Rock beats Scissors";
  }
}

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let tieText = document.getElementById("result-tie");

let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

function showResults(){
  tieText.innerHTML = 'Ties: ' + tieAmount;
  playerScore.innerHTML = 'Your score: ' + playerWinAmount;
  computerScore.innerHTML = 'Computer score: ' + computerWinAmount;
}

function checkWinner(){
  if(computerWinAmount == 5){
      alert('Computer wins!')
      computerWinAmount = 0;
      playerWinAmount = 0;
      tieAmount = 0;
      showResults();
  }
  else if(playerWinAmount == 5){
      alert('You win!')
      computerWinAmount = 0;
      playerWinAmount = 0;
      tieAmount = 0;
      showResults();
  }
}

rockButton.addEventListener("click", function(){
  let playerSelection = "rock";
  let computerSelection = computerPlay();
  let output = playRound(playerSelection,computerSelection);
  document.getElementById('lastresult').innerHTML =  output;
  if(output.includes('Win')){
      playerWinAmount++;
  }
  else if(output.includes('Lose')){
      computerWinAmount++;
  }
  else{
      tieAmount++;
  }
  showResults();
  checkWinner();
});

paperButton.addEventListener("click", function() {
  let playerSelection = "paper";
  let computerSelection = computerPlay();
  let output = playRound(playerSelection,computerSelection);
  document.getElementById('lastresult').innerHTML =  output;    if(output.includes('Win')){
      playerWinAmount++;
  }
  else if(output.includes('Lose')){
      computerWinAmount++;
  }
  else{
      tieAmount++;
  }
  showResults();
  checkWinner();
});

scissorsButton.addEventListener("click", function() {
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  let output = playRound(playerSelection,computerSelection);
  document.getElementById('lastresult').innerHTML =  output;    if(output.includes('Win')){
      playerWinAmount++;
  }
  else if(output.includes('Lose')){
      computerWinAmount++;
  }
  else{
      tieAmount++;
  }
  showResults();
  checkWinner();
});
