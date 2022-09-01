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

let playerChoice, computerChoice, outcome;
computerChoice = getComputerChoice();
playerChoice = "Rock";
outcome = determineOutcome();

