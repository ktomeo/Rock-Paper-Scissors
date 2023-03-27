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

let countingCompScores = document.querySelector('.scoresComp');
let countingPlayScores = document.querySelector('.scoresPlay');

let counterComputer = 0;
let counterPlayer = 0;

const btn = document.querySelector('#btn');
btn.addEventListener('click', playRound);


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    const statement = document.querySelector('.statement')
    if (playerSelection === computerSelection) {
        statement.textContent = 'Tie'
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        counterPlayer++;
        updatePlayDisplay();
        statement.textContent = 'Win'
        } else if (
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')) {
        counterComputer++;
        updateCompDisplay();
        statement.textContent = 'Lose'
        }
    if (counterComputer === 5) {
            return alert('You lost to the computer!');
    } else if (counterPlayer === 5) {
            return alert('You beat the computer!');
    }
}

function updateCompDisplay () {
    countingCompScores.innerHTML = counterComputer;
}

function updatePlayDisplay () {
    countingPlayScores.innerHTML = counterPlayer;
}