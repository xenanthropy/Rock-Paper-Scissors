

let playerCount = 0;
let computerCount = 0;
let totalRounds = 0;
let winner = "";

let statusText = document.querySelector('.status');
let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');
let totalRoundsText = document.querySelector('.total-rounds');

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
        makeInvisible();
        if(playerSelection === "Fire"){
            makeVisible("cyndaquil");
            totalRounds++;
            switch(computerSelection){
                case "Fire": makeVisible("cyndaquil-comp","fire-pic"); statusText.textContent = "It's a tie!"; break;
                case "Water": makeVisible("totodile-comp", "water-pic"); computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
                case "Grass": makeVisible("chikorita-comp", "fire-pic"); playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
            }
        }
        if(playerSelection === "Water"){
            makeVisible("totodile");
            totalRounds++;
            switch(computerSelection){
                case "Fire": makeVisible("cyndaquil-comp","fire-pic"); playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
                case "Water": makeVisible("totodile-comp","water-pic"); statusText.textContent = `It's a tie!`; break;
                case "Grass": makeVisible("chikorita-comp","grass-pic"); computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
            }
        }
        if(playerSelection === "Grass"){
            makeVisible("chikorita");
            totalRounds++;
            switch(computerSelection){
                case "Fire": makeVisible("cyndaquil-comp","water-pic"); computerCount++; statusText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; break;
                case "Water": makeVisible("totodile-comp","water-pic"); playerCount++; statusText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`; break;
                case "Grass": makeVisible("chikorita-comp","grass-pic"); statusText.textContent = `It's a tie!`; break;
            }
        }

        playerScoreText.textContent = ` ${playerCount}`;
        computerScoreText.textContent = ` ${computerCount}`;
        totalRoundsText.textContent = ` ${totalRounds}`;
    }

    if(playerCount === 5){
        statusText.textContent = `Player wins the game! ${playerCount} to ${computerCount}`;
    }
    else if(computerCount === 5){
        statusText.textContent = `Computer wins the game! ${computerCount} to ${playerCount}`;
    }

}

// Makes all lower images invisible
function makeInvisible(){
    pokeArray = ["cyndaquil","totodile","chikorita","cyndaquil-comp","totodile-comp","chikorita-comp","fire-pic","water-pic","grass-pic"];
    for (i = 0; i < pokeArray.length; i++) {
        document.getElementById(pokeArray[i]).style.visibility = "hidden";
     }
}

// makes selected images visible
function makeVisible(){
    for (i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).style.visibility = "visible";
     }
}

makeInvisible();
      
fireButton.addEventListener('click', () => {
    playRound("Fire",computerPlay());
});

waterButton.addEventListener('click', () => {
    playRound("Water",computerPlay());
});

grassButton.addEventListener('click', () => {
    playRound("Grass",computerPlay());
});
