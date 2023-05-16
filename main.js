let playerScore = 0;
let computerScore = 0;
let playerSelection = "";

let rockBtn = document.querySelector(".btn-rock");
rockBtn.addEventListener("click", function () {
    playerSelection = "ROCK";
    game();
});

let paperBtn = document.querySelector(".btn-paper");
paperBtn.addEventListener("click", function () {
    playerSelection = "PAPER";
    game();
});

let scissorsBtn = document.querySelector(".btn-scissors");
scissorsBtn.addEventListener("click", function () {
    playerSelection = "SCISSORS";
    game();
});

function game() {
        
        const computerSelection = getComputerChoice();
            
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

    const displayResult = document.querySelector(".result");
    
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        computerScore++;
        displayResult.innerText ='\"You Lose! Paper beats Rock\"';
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        computerScore++;
        displayResult.innerText ='\"You Lose! Scissors beats Paper\"';
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        computerScore++;
        displayResult.innerText ='\"You Lose! Rock beats Scissors\"';
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        playerScore++;
        displayResult.innerText ='\"You Win! Paper beats Rock\"';
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        playerScore++;
        displayResult.innerText ='\"You Win! Scissors beats Paper\"';
     }
     else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
         playerScore++;
         displayResult.innerText ='\"You Win! Rock beats Scissors\"';
        }
        else if (playerSelection.toUpperCase() === computerSelection.toUpperCase() ) {
            displayResult.innerText ='\"Equality\"';
        }
    }

    playRound(playerSelection, computerSelection)


const displayPlayerscore = document.querySelector(".player-score");
    displayPlayerscore.innerText = playerScore;

const displayComputerscore = document.querySelector(".computer-score");
    displayComputerscore.innerText = computerScore;

    const displaycomputerChoice = document.querySelector(".displaycomputerChoice")
        displaycomputerChoice.innerText = "Computer Choice : " + computerSelection;

    function Scores() {
        const displayResult = document.querySelector(".result");
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                displayResult.innerText ='CONGRATS ! YOU WIN ' + playerScore + " > " + computerScore;
                playerScore = 0
                computerScore = 0
            }
            else if (playerScore < computerScore) {
                displayResult.innerText = 'YOU LOSE ! ' + computerScore + " > " + playerScore;
                playerScore = 0
                computerScore = 0
            }
        }
    }
    Scores() 
}