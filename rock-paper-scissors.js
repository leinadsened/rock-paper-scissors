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
    let playerScore = 0;
    let computerScore = 0;
    let scoreDiv = document.getElementById("scores");
    let result = document.getElementById("result");
    let rockButton = document.getElementById("rock");
    rockButton.addEventListener("click", function(){
        let thisRoundsResult = playRound("rock", getComputerChoice());
        result.textContent = thisRoundsResult;
        if (thisRoundsResult == "Player wins!"){playerScore++;}
        else if (thisRoundsResult == "AI wins!") {computerScore++;}
        if (playerScore >= 5){
            scoreDiv.textContent = "You have beaten the AI, you must be very smart!"
        } else if (computerScore >= 5){
            scoreDiv.textContent = "The computer must have had luck, it won this time."
        } else {
            scoreDiv.textContent = "Player: " + playerScore + " Computers score: " + computerScore;
        }    });
    let paperButton = document.getElementById("paper");
    paperButton.addEventListener("click", function(){
        let thisRoundsResult = playRound("paper", getComputerChoice());
        result.textContent = thisRoundsResult;
        if (thisRoundsResult == "Player wins!"){playerScore++;}
        else if (thisRoundsResult == "AI wins!") {computerScore++;}
        if (playerScore >= 5){
            scoreDiv.textContent = "You have beaten the AI, you must be very smart!"
        } else if (computerScore >= 5){
            scoreDiv.textContent = "The computer must have had luck, it won this time."
        } else {
            scoreDiv.textContent = "Player: " + playerScore + " Computers score: " + computerScore;
        }    });
    let scissorsButton = document.getElementById("scissors");
    scissorsButton.addEventListener("click", function(){
        let thisRoundsResult = playRound("scissors", getComputerChoice());
        result.textContent = thisRoundsResult;
        if (thisRoundsResult == "Player wins!"){playerScore++;}
        else if (thisRoundsResult == "AI wins!") {computerScore++;}
        if (playerScore >= 5){
            scoreDiv.textContent = "You have beaten the AI, you must be very smart!"
        } else if (computerScore >= 5){
            scoreDiv.textContent = "The computer must have had luck, it won this time."
        } else {
            scoreDiv.textContent = "Player: " + playerScore + " Computers score: " + computerScore;
        }
    });

}


function getPlayerChoice(){
    let input = prompt("Please choose rock, paper or scissors!");
    let choice = input.toLowerCase();
    return choice;
}

game();