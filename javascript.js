function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'ROCK';
    }
    else if (x === 1) {
        return 'PAPER';
    }
    else {
        return 'SCISSORS';
    }
}

let playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
let computerSelection = getComputerChoice();

function playRound() {
    if (playerSelection === computerSelection) {
        return alert('It\'s a draw!')
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        return alert('You win!');
        }
    else if (
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')) {
        return alert('You lose!');
        }
    else {
        return alert('Please enter \'Rock, Paper, or Scissors\'');
    }
}

console.log(playerSelection)
console.log(computerSelection)
console.log(playRound())

for (let i = 0; i < 5; i++) {

 }
 