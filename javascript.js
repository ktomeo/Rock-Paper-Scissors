function computerSelection() {
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

const playerInput = prompt()
let playerSelection = playerInput.toUpperCase()


function playRound(playerSelection, computerSelection) {
    if (
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
        return 'It\'s a draw!'
    }   
}

console.log(playerSelection)
console.log(computerSelection())
console.log(playRound(playerSelection, computerSelection))

