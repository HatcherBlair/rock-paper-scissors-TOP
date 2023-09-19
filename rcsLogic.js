// Defining constants to make the code more readable
const DRAW = 0;
const COMPUTER_WIN = 1;
const USER_WIN = 2;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Define user and computer score as global variables so that they don't need to be passed everywhere
let computerScore = 0;
let userScore = 0;

// Gets a random rock paper or scissors value
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return ROCK;
            break;
        case 1:
            return PAPER;
            break;
        case 2:
            return SCISSORS
            break;
        default:
            return undefined;
    }
}

// Checks for round winner and updates score
function playRound(userChoice, computerChoice) {
    // Checking all of the possible outcomes for the game
    if (userChoice === computerChoice) {
        // Draw, do nothing
    } else if (userChoice === ROCK) {
        // Because computerChoice cannot be rock here we only need to check paper or scissors and can infer the other outcome
        if (computerChoice === PAPER) {
            computerScore++;
        } else {
            userScore++;
        }
    } else if (userChoice === PAPER) {
        // Only need to check for rock or scissors here
        if (computerChoice === ROCK) {
            userScore++;
        } else {
            computerScore++;
        }
    } else {
        // User choice is scissors here
        // Only need to check for rock or paper here
        if (computerChoice === ROCK) {
            computerScore++;
        } else {
            userScore++;
        }
    }

    // Update the score and check for winner
    updateScore();
    checkWinner();
}

function updateScore() {
    const scoreBoard = document.querySelector('.current_score');
    scoreBoard.textContent = `User: ${userScore} \t Computer: ${computerScore}`;
}

function checkWinner() {
    // Check to see who won
    if (userScore >= 5) {
        alert(`User won with a score of ${userScore}`);
        computerScore = 0;
        userScore = 0;
        updateScore();
    } else if (computerScore >= 5) {
        alert(`Computer won with a score of ${computerScore}`);
        userScore = 0;
        computerScore = 0;
        updateScore();
    }
}

// Style the body
document.body.style.backgroundColor = '#332F2E';
document.body.style.margin = '0px';
document.body.style.padding = '0px';

// Set the text color for head headers
const mainHeader = document.querySelector('h1');
mainHeader.style.color = 'white';
mainHeader.style.textAlign = 'center';
const instructionHeader = document.querySelector('h3');
instructionHeader.style.color = 'white';
instructionHeader.style.textAlign = 'center';

// Style the group of buttons
const buttonGroup = document.querySelector('.rcs_buttons');
buttonGroup.setAttribute('style', 'display: flex; align-items: center; justify-content: space-evenly;');

// Style the buttons and add event listeners
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.style.borderRadius = '8px';
    button.style.borderColor = 'black';
    button.style.border = 'solid';
    button.style.padding = '20px 30px';
    button.style.fontWeight = '600';
    button.style.fontSize = '48px';

    button.addEventListener('click', () => {
        playRound(button.getAttribute('class'), getComputerChoice());
    })
})

// Style the score board
const scoreBoard = document.querySelector('.current_score');
scoreBoard.style.color = 'white';
scoreBoard.style.textAlign = 'center';
scoreBoard.style.fontSize = '32px';

// Ensure that the score is displayed on page load
updateScore();