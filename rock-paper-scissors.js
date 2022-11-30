function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        switch(computerSelection){
            case "rock":
                return "Draw!";
            case "paper":
                return "AI wins!";
            case "scissors":
                return "Player wins!";
        }
    } else if(playerSelection == "paper"){
        switch(computerSelection){
            case "rock":
                return "Player wins!";
            case "paper":
                return "Draw!";
            case "scissors":
                return "AI wins!";
        }
    } else if(playerSelection == "scissors"){
        switch(computerSelection){
            case "rock":
                return "AI wins!";
            case "paper":
                return "Player wins!";
            case "scissors":
                return "Draw!";
        }
    } else { return "Problem";}
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++){
        console.log("Round " + (i + 1) + ": ");
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        if (round == "Player wins!"){
            score++;
        }
    }
    if (score >= 3) {
        console.log("You showed the computer who is the smarter one!");
    } else {console.log("Bloody machines are getting smarter everyday!")}
}

function getPlayerChoice(){
    let input = prompt("Please choose rock, paper or scissors!");
    let choice = input.toLowerCase();
    return choice;
}

game();