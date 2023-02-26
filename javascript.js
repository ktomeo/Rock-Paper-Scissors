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

function playRound(playerSelection, computerSelection) {

}