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
    scoreDiv.textContent = "";
    restartBtn.style.display = "none";
    buttons.style.display = "block";
}

function checkScores(playerScore, computerScore) {
    if (playerScore >= 5){
        scoreDiv.textContent = "You have beaten the AI, you must be very smart!";
        restartGame();
    } else if (computerScore >= 5){
        scoreDiv.textContent = "The computer must have had luck, it won this time.";
        restartGame();
    } else {
        scoreDiv.textContent = "Player: " + playerScore + " Computers score: " + computerScore;
    }
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    buttons.style.display = "none";
    restartBtn.style.display = "block";
}

let playerScore = 0;
let computerScore = 0;
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let rockButton = document.getElementById("rock");
let result = document.getElementById("result");
let scoreDiv = document.getElementById("scores");
let buttons = document.getElementById("game-buttons");
let restartBtn = document.getElementById("restart-button");
rockButton.addEventListener("click", function(){
    let thisRoundsResult = playRound("rock", getComputerChoice());
    result.textContent = thisRoundsResult;
    if (thisRoundsResult == "Player wins!"){playerScore++;}
    else if (thisRoundsResult == "AI wins!") {computerScore++;}
    checkScores(playerScore, computerScore);
});
paperButton.addEventListener("click", function(){
    let thisRoundsResult = playRound("paper", getComputerChoice());
    result.textContent = thisRoundsResult;
    if (thisRoundsResult == "Player wins!"){playerScore++;}
    else if (thisRoundsResult == "AI wins!") {computerScore++;}
    checkScores(playerScore, computerScore);
});
scissorsButton.addEventListener("click", function(){
    let thisRoundsResult = playRound("scissors", getComputerChoice());
    result.textContent = thisRoundsResult;
    if (thisRoundsResult == "Player wins!"){playerScore++;}
    else if (thisRoundsResult == "AI wins!") {computerScore++;}
    checkScores(playerScore, computerScore);
});
restartBtn.addEventListener("click", game);
game();