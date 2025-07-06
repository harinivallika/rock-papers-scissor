let playerScore = 0;
let computerScore = 0;

document.getElementById('rock-btn').addEventListener('click', () => {
    playGame('rock');
});

document.getElementById('paper-btn').addEventListener('click', () => {
    playGame('paper');
});

document.getElementById('scissors-btn').addEventListener('click', () => {
    playGame('scissors');
});

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (playerChoice === computerChoice) {
        result = `It's a tie! Both players selected ${playerChoice}.`;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'scissors' && computerChoice === 'paper') ||
               (playerChoice === 'paper' && computerChoice === 'rock')) {
        result = `Player wins! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        result = `Computer wins! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    document.getElementById('result').textContent = `Player chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('score').textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}