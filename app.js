const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const results = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random () * 3) + 1 //Or you can use possibleChoices.length in place of 3
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
      result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'You lose!'
    }
    results.innerHTML = result
  }
