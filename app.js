const choices = document.querySelector("#button-action");
let userChoice;

const computerChoice = ["rock", "paper", "scissor"];
const computerSelect = Math.floor(Math.random() * computerChoice.length)
let computerPick = computerChoice[computerSelect];

choices.addEventListener("click", e => {
    userChoice = e.target.id;
})

function gameLogic(user, computer) {
    if(user === computer) {
        console.log("draw")
    } else if (
        (user === "rock" && computer === "scissors") || 
        (user === "paper" && computer === "rock") || 
        (user === "scissors" && computer === "paper")
    ) {
        console.log("You win")
    } else {
        console.log("you lose")
    }
}
