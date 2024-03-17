/* RockPaperScissors Game
1. create a function that will randomly return r, p, s
2. create a function that starts the game that takes two
    parameters, player computer and return a string 
    to declare a  winner     
*/
const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    random = Math.floor(Math.random() * 3);
    return choices[random].toUpperCase();
}
console.log(getComputerChoice());