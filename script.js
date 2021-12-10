
    let playerCount = 0;
    let computerCount = 0;
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

    // Asks the player for an input of either Rock, Paper, or Scissors (case insensitive)
    function playerPlay() {
      playerChoice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
      playerChoice= playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
      return playerChoice;
    }

    // Plays out a single round of Rock, Paper, Scissors
    function playRound(playerSelection, computerSelection){
      if(playerSelection === "Rock"){
        switch(computerSelection){
          case "Rock": return `It's a tie!`;
          case "Paper": computerCount++; return `You Lose! ${computerSelection} beats ${playerSelection}`;
          case "Scissors": playerCount++; return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
      }

      if(playerSelection === "Paper"){
        switch(computerSelection){
          case "Rock": playerCount++; return `You Win! ${playerSelection} beats ${computerSelection}`;
          case "Paper": return `It's a tie!`;
          case "Scissors": computerCount++; return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
      }

      if(playerSelection === "Scissors"){
        switch(computerSelection){
          case "Rock": computerCount++; return `You Lose! ${computerSelection} beats ${playerSelection}`;
          case "Paper": playerCount++; return `You Win! ${playerSelection} beats ${computerSelection}`;
          case "Scissors": return `It's a tie!`;
        }
      }
    }

    function game() {
      while(computerCount + playerCount < 5 && computerCount < 3 && playerCount < 3){
        console.log(playRound(playerPlay(), computerPlay()));
      }
      if(playerCount === 3){
        return `Player wins! ${playerCount} to ${computerCount}`;
      }
      if(computerCount === 3){
        return `Computer wins! ${computerCount} to ${playerCount}`;
      }
    }

    console.log(game());