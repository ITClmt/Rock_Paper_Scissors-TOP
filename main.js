let playerScore = 0;
let computerScore = 0;

function game() {
    for (i = 0; i < 5; i++) {

    const playerSelection = prompt('Rock, Paper or Scissors');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log('playerScore: ' + playerScore);
    console.log('computerScore: ' + computerScore );
      
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        computerScore++;
       return '\"You Lose! Paper beats Rock\"';
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        computerScore++;
        return '\"You Lose! Scissors beats Paper\"';
     }
     else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        computerScore++;
        return '\"You Lose! Rock beats Scissors\"';
     }
     else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        playerScore++;
        return '\"You Win! Paper beats Rock\"';
     }
     else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        playerScore++;
        return '\"You Win! Scissors beats Paper\"';
     }
     else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        playerScore++;
        return '\"You Win! Rock beats Scissors\"';
     }
     else if (playerSelection.toUpperCase() === computerSelection.toUpperCase() ) {
        return '\"Equality\"';
            }
        }
    }
}

game()

function Scores() {
    if (playerScore > computerScore) {
        return 'Congrats ! You Win';
    }

    else if (playerScore === computerScore) {
        return 'Tie !';
    }
    else if (playerScore < computerScore) {
        return 'You Lose !';
    }
}

console.log(Scores())



