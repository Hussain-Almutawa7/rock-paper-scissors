const choices = document.querySelector("#button-action");
let userChoice;

const computerChoice = ["rock", "paper", "scissor"];

const userScore = document.querySelector("#user-score")
const computerScore = document.querySelector("#computer-score")
const tieScore = document.querySelector("#tie-score")
const resetScore = document.querySelector("#reset-score");

let userPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

choices.addEventListener("click", e => {
    userChoice = e.target.id;

    const computerSelect = Math.floor(Math.random() * computerChoice.length)
    let computerPick = computerChoice[computerSelect];

    gameLogic(userChoice, computerPick)
})

function gameLogic(user, computer) {
    if(user === computer) {
        tiePoints++;
    } else if (
        (user === "rock" && computer === "scissors") || 
        (user === "paper" && computer === "rock") || 
        (user === "scissors" && computer === "paper")
    ) {
        userPoints++
    } else {
        computerPoints++
    }

    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
    tieScore.textContent = tiePoints;
}

resetScore.addEventListener("click", () => {
    userPoints = 0;
    computerPoints = 0;
    tiePoints = 0;

    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
    tieScore.textContent = tiePoints;
})