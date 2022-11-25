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
            case rock:
                return "Player wins!";
            case paper:
                return "Draw!";
            case scissors:
                return "AI wins!";
        }
    } else if(playerSelection == "scissors"){
        switch(computerSelection){
            case rock:
                return "AI wins!";
            case paper:
                return "Player wins!";
            case scissors:
                return "Draw!";
        }
    } else { return "Problem";}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));