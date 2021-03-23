let userScore = 0;
let computerScore = 0;

playGame();

function getUserSelection() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function getComputerSelection() {
    const playOptions = ['rock', 'paper', 'scissors'];
    return playOptions[Math.floor(Math.random() * playOptions.length)];
}

function updateUserScore() {
    userScore++;
};

function updateComputerScore() {
    computerScore++;
};

function playRound() {
    const userSelection = getUserSelection();
    const computerSelection = getComputerSelection();

    if (userSelection === computerSelection) {
        return `It's a tie!
        computer: ${computerScore} you: ${userScore}`;
    }

    if (
        (userSelection == "rock" && computerSelection == "scissors") ||
        (userSelection == "scissors" && computerSelection == "paper") ||
        (userSelection == "paper" && computerSelection == "rock")
    ) {
        updateUserScore();
        return `You win! ${userSelection} beats ${computerSelection}
        computer: ${computerScore} you: ${userScore}`;
    } else {
        updateComputerScore();
        return `The Computer wins! ${computerSelection} beats ${userSelection}
        computer: ${computerScore} you: ${userScore}`;
    }
}

function checkWinner() {
    if (userScore === computerScore) {
        return 'It\'s a tie! Hit refresh to play again';
    }

    if (userScore > computerScore) {
        return 'Congrats, you win! Hit refresh to play again';
    } else {
        return 'Bad luck, you lose! Hit refresh to play again';
    }
}

function bestOfFive() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

function playGame() {
    console.log(bestOfFive());
    console.log(checkWinner());
}