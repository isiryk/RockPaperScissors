/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const getUserChoice = userInput => {
  let choice = userInput.toLowerCase();
  if(choice == "rock" || choice == "paper" || choice == "scissors" || choice == "bomb"){
    return choice;
  }
  else{
    return console.log("Error: Wrong input " + choice);
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * Math.floor(3));
  let reply;
  switch(choice){
    case 0:
      reply = "scissors";
      break;
    case 1:
      reply = "paper";
      break;
    case 2:
      reply = "rock";
      break;
    default:
      reply = "Not really your fault, but something broke";
  }
  return reply;
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice == computerChoice){
    return "Its a tie";
  }
  else if(userChoice == "paper"){
          if(computerChoice == "scissors"){
            return "computer wins"
          }
    			else if(computerChoice == "rock"){
            return "player wins"
          }
    			else{
            return "Did I miss a tie condition? Or something went seriously wrong";
          }
  }
  else if(userChoice == "scissors"){
    		if(computerChoice == "rock"){
            return "computer wins"
          }
    			else if(computerChoice == "paper"){
            return "player wins"
          }
    			else{
            return "Did I miss a tie condition? Or something went seriously wrong";
          }
  }
  else if(userChoice == "rock"){
    		if(computerChoice == "paper"){
            return "computer wins"
          }
    			else if(computerChoice == "scissors"){
            return "player wins"
          }
    			else{
            return "Did I miss a tie condition? Or something went seriously wrong";
          }
  }
  // secret cheatcode for fun
  else if(userChoice == "bomb"){
    return "player wins";
  }
  else{
    return "I dont know, it broke, should never be here."
  }
}

function playGame(userOption){
  let userChoice = getUserChoice(userOption);
  let computerChoice = getComputerChoice();
  let winner = determineWinner(userChoice, computerChoice);
  console.log(userChoice + " vs " + computerChoice + ": " + determineWinner(userChoice, computerChoice));
  document.getElementById("demo").innerHTML = x;
  return determineWinner(userChoice, computerChoice);
}
