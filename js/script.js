var computerMove;
computerMove = 'kamień';

var playerMove;
playerMove = 'papier';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

var computerMove, randomNumber;
var minVal = 1;
var maxVal = 3;
randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
printMessage('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);