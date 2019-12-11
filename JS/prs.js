var datum = new Date();



function computerPlay() {
    const choicesList = ['paper', 'rock', 'scissors'];
   	let computerChoice = choicesList[Math.floor(Math.random() * choicesList.length)];
    compMsg('Computer chose ' + computerChoice);
    return computerChoice;
}
function playRound(playerSelection,computerSelection) {
//  let playerChoice = playerSelection.toLowerCase();
	switch (playerSelection) {
    case 'rock' :
      switch (computerSelection) {
        case 'rock' : return 0; break;
        case 'paper' : return -1; break;
        case 'scissors' : return 1;
    };
    break;
    case 'paper' :
      switch (computerSelection) {
        case 'paper' : return 0; break;
        case 'rock' : return 1; break;
        case 'scissors' : return -1;
    };
    break;
    case 'scissors' :
      switch (computerSelection) {
        case 'scissors' : return 0; break;
        case 'paper' : return 1; break;
        case 'rock' : return -1;
    };
    default : return "Must enter rock, paper, or scissors!";
 	}
}
function round(playerSelection) {
  const computerSelection = computerPlay()
  let result = playRound(playerSelection, computerSelection)
  if (result > 0) {
    playerScore++;
    if (playerScore >= winNum) {
      gameOver();
      msg("gameMsg", 'YOU WIN THE GAME! xD');
      msg("yourScoreMsg", 'Your Score: ' + playerScore);
    } else {
      msg("gameMsg", 'You win the round!');
      msg("yourScoreMsg", 'Your Score: ' + playerScore);
    }
  } else if (result < 0) {
    compScore++;
    if (compScore >= winNum) {
      gameOver();
      msg("gameMsg", 'YOU LOSE THE GAME! :/');
      msg("compScoreMsg", 'Computer Score: ' + compScore);
    } else {
      msg("gameMsg", 'You lose the round!');
      msg("compScoreMsg", 'Computer Score: ' + compScore);
    }
  } else {
    msg("gameMsg", 'The round was a tie!');
  }
  return result;
}
function game(winNum) {
  playerScore = 0;
  compScore = 0;
  msg("yourScoreMsg", 'Your Score: 0');
  msg("compScoreMsg", 'Computer Score: 0');
  paperBtn.addEventListener("click", paperBtn.fnc = function() {round('paper')});
  rockBtn.addEventListener("click", rockBtn.fnc = function() {round('rock')});
  scissorBtn.addEventListener("click", scissorBtn.fnc = function() {round('scissors')});
}
function gameOver() {
  paperBtn.removeEventListener("click", paperBtn.fnc);
  rockBtn.removeEventListener("click", rockBtn.fnc);
  scissorBtn.removeEventListener("click", scissorBtn.fnc);
}
function msg(id, message) {
  document.getElementById(id).innerHTML = message;
}
function compMsg(message) {
  document.getElementById("compMsg").innerHTML = message;
}
function yourScore(message) {
  document.getElementById("yourScoreMsg").innerHTML = message;
}
function compScore(message) {
  document.getElementById("compScoreMsg").innerHTML = message;
}
var playerScore = 0;
var compScore = 0;
const winNum = 3;
let paperBtn = document.querySelector('#paper');
let rockBtn = document.querySelector('#rock');
let scissorBtn = document.querySelector('#scissors');
let newBtn = document.querySelector('#newGame');
paperBtn.addEventListener("click", function() {msg('gameMsg', 'Start a new game!')});
rockBtn.addEventListener("click", function() {msg('gameMsg', 'Start a new game!')});
scissorBtn.addEventListener("click", function() {msg('gameMsg', 'Start a new game!')});
newBtn.addEventListener("click", function() {game()});