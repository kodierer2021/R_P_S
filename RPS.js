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
        return("Rock");
    }
    else if (choice.toLowerCase() === "paper"){
        return("Paper");
    }
    else if (choice.toLowerCase() === "scissors"){
        return("Scissors");
    }
    else{
        alert("You chose what now?");
        return("kung-fu moves")
    }
    console.log(choice);
}

function playRound(){
computerChoice = getComputerChoice();
playerChoice = getPlayerChoice();
outcome = determineOutcome();
alert("You played "+ playerChoice + " the computer picked " + computerChoice + " and you " + outcome+ "!");
}

function game(){
    let scoreWin = 0, scoreDraw = 0, scoreLose = 0;
    for(i = 0;i<5;i++){
    playRound();
    if(determineOutcome() === 'win'){
        scoreWin = scoreWin + 1; 
    }
    else if(determineOutcome() === 'draw')
    {
        scoreDraw = scoreDraw +1;
    }
    else{
        scoreLose = scoreLose +1;
    }
    alert(scoreWin +" rounds won and " + scoreDraw + " draws and "+ scoreLose + " times lost.");
    }
    if (scoreWin > scoreLose){
        alert("You win!");
    }
    else if (scoreWin === scoreLose){
        alert("It's a draw!");
    }
    else{
        alert("You lost!");
    }
    
}

let playerChoice, computerChoice, outcome;

game();