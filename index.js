// var userInput = process.argv[2];
var rockButton = document.getElementById ('rock')
var paperButton = document.getElementById('paper')
var scissorsButton = document.getElementById('scissors')
var userInput
rockButton.onclick = function(){
  userInput = ('rock')
  alert(compare(userInput, computerInput));
}

paperButton.onclick = function(){
  userInput = ('paper')
  alert(compare(userInput, computerInput));
}
scissorsButton.onclick = function(){
  userInput = ('scissors')
  alert(compare(userInput, computerInput));
}

// var userInput = 0;
var computerInput = Math.random() * 100
if (computerInput < 33) {
  computerInput = 'rock'
}
else if (computerInput > 66) {
  computerInput = "paper"
}
else {computerInput = 'scissors'}

function compare (user, computer){
  var result
  if (user == computer) {
    result = "tie"
  }
  else if (user == "paper" && computer == 'rock') {
    result = "win"
  }
  else if (user == 'scissors' && computer == "paper") {
    result = "win"
  }
  else if (user == 'rock' && computer == 'scissors') {
    result = "win"
  }
  else if (user == 'rock' && computer == "paper") {
    result = "you lose fucker"
  }
  else if (user == "paper" && computer == 'scissors') {
    result = "you lose fucker"
  }
  else if (user == 'scissors' && computer == 'rock') {
    result = "you lose fucker"
  }
  return result
}

console.log(userInput);
console.log(computerInput);
