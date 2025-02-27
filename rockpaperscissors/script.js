let humanScore = 0;
const humanScoreCounter = document.querySelector('.playerScore');
let computerScore = 0;
const computerScoreCounter = document.querySelector('.computerScore');
const responseText = document.querySelector('.responseText');

let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => playRound(getComputerChoice(), 'Rock'));

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => playRound(getComputerChoice(), 'Paper'));

let scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => playRound(getComputerChoice(), 'Scissors'));

function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1/3)
        return 'Rock';
    else if  (rand < 2/3)
        return 'Paper';
    else
        return 'Scissors';
}

function getHumanChoice(round, attempts = 3) {
    for (let i = 1; i <= attempts; i++) {
        let response = prompt(`Round ${round}, Select "Rock", "Paper", or "Scissors"`).toLowerCase();
        if (response === 'rock' || response === 'paper' || response === 'scissors')
            return (response[0].toUpperCase() + response.substring(1));
        else
            alert('Invalid response');
    }

    alert('Too many invalid responses, using random response');
    return getComputerChoice();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice)
        responseText.innerHTML = `Tie, go again!`
    else if (computerChoice == 'Rock' && humanChoice == 'Scissors' ||
            computerChoice == 'Paper' && humanChoice == 'Rock' ||
            computerChoice == 'Scissors' && humanChoice == 'Paper') {
        responseText.innerHTML = `The computer gets a point, ${humanChoice} beats ${computerChoice}`
        computerScore++;
    }
    else {
        responseText.innerHTML = `You get a point, ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    humanScoreCounter.textContent = 'Your Score: ' + String(humanScore);
    computerScoreCounter.textContent = 'Computer Score: ' + String(computerScore);

    if (humanScore === 5)
        setTimeout(function () { alert('You win, good game!') }, 1);
    else if (computerScore === 5)
        setTimeout(function () { alert('You lose, better luck next time...') }, 1);
}