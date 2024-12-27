let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'tie';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function playGame(playerChoice) {
    if (currentRound >= 3) return;

    currentRound++;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === 'player') {
        playerScore++;
        document.getElementById('result').textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. You win!`;
    } else if (winner === 'computer') {
        computerScore++;
        document.getElementById('result').textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. You lose!`;
    } else {
        document.getElementById('result').textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. It's a tie!`;
    }

    document.getElementById('score').textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    document.getElementById('round').textContent = `Round: ${currentRound}/3`;

    if (currentRound >= 3) {
        if (playerScore > computerScore) {
            document.getElementById('final-result').textContent = "You are the winner!";
        } else if (computerScore > playerScore) {
            document.getElementById('final-result').textContent = "Computer is the winner!";
        } else {
            document.getElementById('final-result').textContent = "It's a tie game!";
        }
    }
}
