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

let playerSelection = prompt().toUpperCase()

function playRound() {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        return 'You win!';
        }
    else if (
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')) {
        return 'You lose!';
        }
    else {
        return 'Please enter \'Rock, Paper, or Scissors\''
    }
}

console.log(playerSelection)
console.log(getComputerChoice())
console.log(playRound())
