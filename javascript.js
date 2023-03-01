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

let counter = {computer: 0, player: 0};

function playRound() {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
    let computerSelection = getComputerChoice();
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        return 'Tie'
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        counter.player++;
        return 'Win'
        }
    else if (
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')) {
        counter.computer++;
        return 'Lose'
        }
    else {
        return 'Try again'
    }
}

for (let i = 0; i < 5; i++) {
    console.log(playRound());
    console.log(counter);
}