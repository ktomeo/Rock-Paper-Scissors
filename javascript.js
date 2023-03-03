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

let counterComputer = 0;
let counterPlayer = 0;

function playRound() {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
    let computerSelection = getComputerChoice();
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        return alert('Tie')
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        counterPlayer++;
        return alert('Win')
        } else if (
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')) {
        counterComputer++;
        return alert('Lose')
        }
    else {
        return alert('Try again')
    }
}

for (let i = 0; (i < 1000); i++) {
    console.log(playRound());
    console.log(counterPlayer);
    console.log(counterComputer);
    if (counterComputer === 5) {
        break;
    } else if (counterPlayer === 5) {
        break;
    }
}

function winCondition() {
    if (counterComputer === 5) {
        return alert('You lost to the computer!');
    } else if (counterPlayer === 5) {
        return alert('You beat the computer!');
    }
}

console.log (winCondition());