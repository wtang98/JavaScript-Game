"use strict";

var getUserChoice = function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("error");
  }
};

var getComputerChoice = function getComputerChoice() {
  var choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

var determineWinner = function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'game was a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer wins';
    } else {
      return 'user wins';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer wins';
    } else {
      return 'user wins';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer wins';
    } else {
      return 'user wins';
    }
  }
};

var playGame = function playGame() {
  var userChoice = getUserChoice('paper');
  var computerChoice = getComputerChoice();
  console.log('you threw' + userChoice);
  console.log('computer threw' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};