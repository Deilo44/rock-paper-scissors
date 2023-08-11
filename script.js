function getComputerChoice(){
    let choices=["Rock","Paper","Scissors"];
    let randomindex= Math.floor(Math.random()*choices.length);
    return choices[randomindex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        return "!!!!Draw!!!!";
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="scissors"){
        return "You Lose! Scissors beats paper";
    }
    else if(playerSelection.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="paper"){
        return "You Win! Scissors beats paper";
    }
}

function game(){
    let wins=0;
    let loses=0;
    let draws=0;
    let outcome="";
    for(let i=0;i<5;i++){
        const playerSelection = prompt("Choose Rock,Paper or Scissors");
        const computerSelection = getComputerChoice();
        outcome = playRound(playerSelection, computerSelection).substring(4,8);
            if(outcome===Win!){
                wins++;
            }
            else if(outcome===Lose){
                loses++;
            } 
            else{
                draws++;
            }
        console.log(playRound(playerSelection, computerSelection));
    }
    if(wins > loses){
        return "You Win";
    }
    else if(loses > wins){
        return "You Lose";
    }
    else{
        return "Draw";
    }
}