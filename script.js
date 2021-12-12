

let playerCount = 0;
let computerCount = 0;
let winner = "";

let statusText = document.querySelector('.status');
let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');

let fireButton = document.querySelector('.fire');
let waterButton = document.querySelector('.water');
let grassButton = document.querySelector('.grass');



/* Picks a random number between 1-100 and chooses either Rock, Paper, or Scissors
Based off of the number randomly selected */
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if(randomNumber <= 33){
        return "Fire";
    }
    else if(randomNumber <= 66 && randomNumber > 33){
        return "Water";
    }
    else if(randomNumber > 66){
        return "Grass";
    }
}

// Plays out a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection){
    
    if(playerCount < 5 && computerCount < 5){
        if(playerSelection === "Fire"){
            switch(computerSelection){
                case "Fire": statusText.textContent = "It's a tie!"; break;
                case "Water": computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
                case "Grass": playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
            }
        }
        if(playerSelection === "Water"){
            switch(computerSelection){
                case "Fire": playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
                case "Water": statusText.textContent = `It's a tie!`; break;
                case "Grass": computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
            }
        }
        if(playerSelection === "Grass"){
            switch(computerSelection){
                case "Fire": computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
                case "Water": playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
                case "Grass": statusText.textContent = `It's a tie!`; break;
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
      
fireButton.addEventListener('click', () => {
    playRound("Fire",computerPlay());
});

waterButton.addEventListener('click', () => {
    playRound("Water",computerPlay());
});

grassButton.addEventListener('click', () => {
    playRound("Grass",computerPlay());
});
