/*a = Math.floor(Math.random() * 3);
*/
function getComputerChoice(){
    let a, b;
    a = Math.floor(Math.random() * 3);
    if(a === 0){
        b = 'Rock';
    }
    else if(a === 1){
        b = 'Paper';
    }
    else{
        b = 'Scissors';
    }
    console.log(b);    
    return(b);
}

function determineOutcome(){
    let outcome;
    if (playerChoice === computerChoice){
        outcome = 'draw';
    }
    else if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
        outcome ='win';
    }
    else if(playerChoice === 'Scissours' && computerChoice === 'Paper'){
        outcome ='win';
    }
    else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
        outcome ='win';
    }
    else{
        outcome = 'lose';
    }
    return(outcome);
}

function getPlayerChoice(){
    let choice;
    choice = prompt("Rock, Paper or Scissors?");
    if (choice.toLowerCase() === "rock"){
        alert("You chose Rock!");
        return("Rock");
    }
    else if (choice.toLowerCase() === "paper"){
        alert("You chose Paper");
        return("Paper");
    }
    else if (choice.toLowerCase() === "scissors"){
        alert("You chose Scissors");
        return("Scissors");
    }
    else{
        alert("You chose what now?");
    }
    console.log(choice);
}

let playerChoice, computerChoice, outcome;

computerChoice = getComputerChoice();
playerChoice = getPlayerChoice();
outcome = determineOutcome();
