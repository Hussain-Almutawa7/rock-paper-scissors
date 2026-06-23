const choices = document.querySelector("#button-action");
const diplayChoice = document.querySelector("#display-choice");

const userScore = document.querySelector("#user-score")
const computerScore = document.querySelector("#computer-score")
const tieScore = document.querySelector("#tie-score")
const resetScore = document.querySelector("#reset-score");

const winner = document.querySelector("#result");
const userSelect = document.querySelector("#display-user")
const computerSelect = document.querySelector("#display-computer")

const computerChoice = ["rock", "paper", "scissors"];
let userChoice;

let userPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

choices.addEventListener("click", e => {
    if(!e.target.matches("button")) return

    userChoice = e.target.id;

    const computerSelect = Math.floor(Math.random() * computerChoice.length)
    let computerPick = computerChoice[computerSelect];

    gameLogic(userChoice, computerPick)
})

function gameLogic(user, computer) {
    if(user === computer) {
        tiePoints++;
        winner.textContent = "Tie"
    } else if (
        (user === "rock" && computer === "scissors") || 
        (user === "paper" && computer === "rock") || 
        (user === "scissors" && computer === "paper")
    ) {
        userPoints++
        winner.textContent = "You Win"
    } else {
        computerPoints++
        winner.textContent = "You Lose"
    }

    displayUserChoice(user)
    displayComputerChoice(computer)

    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
    tieScore.textContent = tiePoints;
}

//Display Choices
function displayUserChoice(user) {
    if(user === "rock")
        userSelect.textContent = "You ✊"
    else if (user === "paper")
        userSelect.textContent = "You ✋"
    else
        userSelect.textContent = "You ✌️"
}

function displayComputerChoice(computer) {
    if(computer === "rock")
        computerSelect.textContent = "✊ Computer"
    else if (computer === "paper")
        computerSelect.textContent = "✋ Computer"
    else
        computerSelect.textContent = "✌️ Computer"
}


resetScore.addEventListener("click", () => {
    userPoints = 0;
    computerPoints = 0;
    tiePoints = 0;

    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
    tieScore.textContent = tiePoints;

    userSelect.textContent = ""
    computerSelect.textContent = ""
    
    winner.textContent = "";
})