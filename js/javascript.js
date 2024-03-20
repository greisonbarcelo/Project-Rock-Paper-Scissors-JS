/* RockPaperScissors Game
1. create a function that will randomly return r, p, s
2. create a function that starts the game that takes two
    parameters, player computer and return a string 
    to declare a  winner     
*/
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let declareWinner;
function getComputerChoice(){
    random = Math.floor(Math.random() * 3);
    return choices[random].toLowerCase();
}
//console.log(getComputerChoice());
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log( `You win! ${playerSelection} beats ${computerSelection}!`);
        playerScore += 1;
        return playerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log( `You lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore += 1;
        return computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log( `You win! ${playerSelection} beats ${computerSelection}!`);
        playerScore += 1;
        return playerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log( `You lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore += 1;
        return computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log( `You win! ${playerSelection} beats ${computerSelection}!`);
        playerScore += 1;
        return playerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log( `You lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore += 1;
        return computerScore;
    } else if (playerSelection === computerSelection){
        console.log( `It's a tie! ${playerSelection} = ${computerSelection}!`);
        return;
    } else console.log( `Invalid Input! ${playerSelection} !`);

}

function computeScore(playerScore, computerScore){
    if (playerScore > computerScore){
        return `Player Wins!`;
    } else if(computerScore > playerScore){
        return `Computer Wins!`;
    } else if (playerScore === computerScore){
        return `It's a tie! Player: ${playerScore} Computer: ${computerScore}`;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        const playerSelection = prompt('Choose your hand, rock paper scissors shoot!');
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log(computeScore(playerScore, computerScore));
    if(confirm('Play Again?')){
        console.clear();
        playGame();
    } 
}


//console.log(playRound(playerSelection, computerSelection));

playGame();