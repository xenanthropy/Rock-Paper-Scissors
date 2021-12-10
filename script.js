

let playerCount = 0;
let computerCount = 0;
let winner = "";

let statusText = document.querySelector('.bottom-div');
let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');



/* Picks a random number between 1-100 and chooses either Rock, Paper, or Scissors
Based off of the number randomly selected */
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if(randomNumber <= 33){
        return "Rock";
    }
    else if(randomNumber <= 66 && randomNumber > 33){
        return "Paper";
    }
    else if(randomNumber > 66){
        return "Scissors";
    }
}

// Plays out a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection){
    
    if(playerCount < 5 && computerCount < 5){
        if(playerSelection === "Fire"){
            switch(computerSelection){
                case "Rock": statusText.textContent = "It's a tie!"; break;
                case "Paper": computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
                case "Scissors": playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
            }
        }
        if(playerSelection === "Water"){
            switch(computerSelection){
                case "Rock": playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
                case "Paper": statusText.textContent = `It's a tie!`; break;
                case "Scissors": computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
            }
        }
        if(playerSelection === "Grass"){
            switch(computerSelection){
                case "Rock": computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
                case "Paper": playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
                case "Scissors": statusText.textContent = `It's a tie!`; break;
            }
        }

        playerScoreText.textContent = ` ${playerCount}`;
        computerScoreText.textContent = ` ${computerCount}`;
    }

    if(playerCount === 5){
        statusText.textContent = `Player wins the game! ${playerCount} to ${computerCount}`;
    }
    else if(computerCount === 5){
        statusText.textContent = `Computer wins the game! ${computerCount} to ${playerCount}`;
    }

}
    /* --plays best of 5 rounds--

      while(computerCount + playerCount < 5 && computerCount < 3 && playerCount < 3){
        console.log(playRound(playerPlay(), computerPlay()));
      }

      if(playerCount === 3){
        return `Player wins! ${playerCount} to ${computerCount}`;
      }
      if(computerCount === 3){
        return `Computer wins! ${computerCount} to ${playerCount}`;
      }

    */
      
rockButton.addEventListener('click', () => {
    playRound("Fire",computerPlay());
});


paperButton.addEventListener('click', () => {
    playRound("Water",computerPlay());
});

scissorsButton.addEventListener('click', () => {
    playRound("Grass",computerPlay());
});
