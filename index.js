// var userInput = process.argv[2];
var rockButton = document.getElementById ('rock')
var paperButton = document.getElementById('paper')
var scissorsButton = document.getElementById('scissors')
var userInput
var resultHouse = document.getElementById('results')
var computerHouse = document.getElementById('computer-choice')
var userHouse = document.getElementById('user-choice')

rockButton.onclick = function(){

  userInput = ('rock')
  var computerChoice = choose()
  resultHouse.innerHTML = compare(userInput, computerChoice);
  computerHouse.innerHTML = `I chose ${computerChoice}`
  userHouse.innerHTML = `You chose ${userInput}`
  // userHouse.innerHTML = 'User: ' + userInput
  // alert(compare(userInput, computerInput));
}

paperButton.onclick = function(){
  userInput = ('paper')
  var computerChoice = choose()
  resultHouse.innerHTML = compare(userInput, computerChoice);
  computerHouse.innerHTML = `I chose ${computerChoice}`
  userHouse.innerHTML = `You chose ${userInput}`
  // alert(compare(userInput, computerInput));
}
scissorsButton.onclick = function(){
  userInput = ('scissors')
  var computerChoice = choose()
  resultHouse.innerHTML = compare(userInput, computerChoice);
  computerHouse.innerHTML = `I chose ${computerChoice}`
  userHouse.innerHTML = `You chose ${userInput}`

  // alert(compare(userInput, computerInput));
}

// var userInput = 0;
function choose () {
  var computerInput = Math.random() * 100
  if (computerInput < 33) {
    return 'rock'
  }
  else if (computerInput > 66) {
    return "paper"
  }
  else {return 'scissors'}
}

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
