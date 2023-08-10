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