const userChoiceDisplay: HTMLHeadingElement = document.createElement('h1');
const computerChoiceDisplay: HTMLHeadingElement = document.createElement('h1');
const resultDisplay: HTMLHeadingElement = document.createElement('h1');
const gameGrid: HTMLElement = document.getElementById('game')!;
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);
const buttonsWrapper = document.getElementById('buttons')!;

const choices: string[] = ['rock', 'paper', 'scissors'];
let userChoice: string;
let computerChoice: string;

const generateComputerChoice = (): string => {
  const randomChoice: string = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
};

const handleClick = (e: MouseEvent): void => {
  userChoice = (e.target as HTMLElement).id;
  userChoiceDisplay.innerHTML = 'You: ' + userChoice;
  computerChoice = generateComputerChoice();
  computerChoiceDisplay.innerHTML = 'Computer: ' + computerChoice;
  determineAndShowResult();
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button');
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener('click', handleClick);
  buttonsWrapper.appendChild(button);
}

const determineAndShowResult = () => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'You WIN!';
      break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'You LOSE!';
      break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
      resultDisplay.innerHTML = 'It is a DRAW!';
      break;
  }
};
