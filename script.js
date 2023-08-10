function getComputerChoice(){
    let choices=["Rock","Paper","Scissors"];
    let randomindex= Math.floor(Math.random()*choices.length);
    return choices[randomindex];
}