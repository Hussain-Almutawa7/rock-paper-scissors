const choices = document.querySelector("#button-action");
let userChoice = "";

const computerChoice = ["rock", "paper", "scissor"];
const computerSelect = Math.floor(Math.random() * computerChoice.length)
const computerPick = computerChoice[computerSelect];

choices.addEventListener("click", e => {
    userChoice = e.target.id;
    console.log(userChoice)
})


