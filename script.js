function getComputerChoice(){
    let choices=["Rock","Paper","Scissors"];
    let randomindex= Math.floor(Math.random()*choices.length);
    return choices[randomindex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        return "Draw";
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="rock"){
        return "Win";
    }
    else if(playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="paper"){
        return "Loss";
    }
    else if(playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="scissors"){
        return "Win";
    }
    else if(playerSelection.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="rock"){
        return "Loss";
    }
    else if(playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="scissors"){
        return "Loss";
    }
    else if(playerSelection.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="paper"){
        return "Win";
    }
}

const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const computerline=document.getElementById("computerline");
const wins=document.getElementById("wins");
const loses=document.getElementById("loses");
const result=document.getElementById("result");
let wincount=0;
let losscount=0;

b1.addEventListener("click",function(){
    let computerchoice=getComputerChoice();
    let gameround=playRound("rock",computerchoice);
    if(gameround=="Draw" && wincount <5 && losscount < 5){
        wincount+=0.5;
        losscount+=0.5;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(gameround=="Win" && wincount <5 && losscount < 5){
        wincount++;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(gameround=="Loss" && wincount <5 && losscount < 5){
        losscount++;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(wincount===5){
        result.textContent="!!!!!!!You win the Game!!!!!!!!";
    }
    else if(losscount===5){
        result.textContent="You Lost!!!";
    }
    else {
        result.textContent="......Draw.......";
    }
});

b2.addEventListener("click",function(){
    let computerchoice=getComputerChoice();
    let gameround=playRound("Paper",computerchoice);
    if(gameround=="Draw" && wincount <5 && losscount < 5){
        wincount+=0.5;
        losscount+=0.5;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(gameround=="Win" && wincount <5 && losscount < 5){
        wincount++;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(gameround=="Loss" && wincount <5 && losscount < 5){
        losscount++;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(wincount===5){
        result.textContent="!!!!!!!You win the Game!!!!!!!!";
    }
    else if(losscount===5){
        result.textContent="You Lost!!!";
    }
    else {
        result.textContent="......Draw.......";
    }
});

b3.addEventListener("click",function(){
    let computerchoice=getComputerChoice();
    let gameround=playRound("Scissors",computerchoice);
    if(gameround=="Draw" && wincount <5 && losscount < 5){
        wincount+=0.5;
        losscount+=0.5;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(gameround=="Win" && wincount <5 && losscount < 5){
        wincount++;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(gameround=="Loss" && wincount <5 && losscount < 5){
        losscount++;
        wins.textContent=wincount;
        loses.textContent=losscount;
        computerline.textContent=computerchoice;
    }
    else if(wincount===5){
        result.textContent="!!!!!!!You win the Game!!!!!!!!";
    }
    else if(losscount===5){
        result.textContent="You Lost!!!";
    }
    else {
        result.textContent="......Draw.......";
    }
});