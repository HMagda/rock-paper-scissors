// const btn = document.createElement("button");
// btn.innerHTML = "Hello Button";
// document.body.appendChild(btn);

// console.log('Hello World');

const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
};

const handleClick = (e) => {
  console.log('clicked');
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice;
  generateComputerChoice();
  getResult();
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button');
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener('click', handleClick);
  gameGrid.appendChild(button)
};

const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'You win!';
      break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'You lose!';
      break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
      resultDisplay.innerHTML = 'It is a draw!';
      break;
  }
}