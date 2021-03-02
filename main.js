// Keeps track of the current game round
let gameRound = 1;

// Keeps track of # of wins
let playerWins = 0;
let computerWins = 0;

// Stores HTML elements
let buttons = document.querySelectorAll(".btn");
let results = document.querySelector(".results");

// Creates empty divs and stores them
let gameRoundDiv = document.createElement("div");
let playerSelectionDiv = document.createElement("div");
let computerSelectionDiv = document.createElement("div");
let roundWinnerDiv = document.createElement("div");
let playerWinsDiv = document.createElement("div");
let computerWinsDiv = document.createElement("div");

// Generates a random choice for the computer
function computerPlay() {
  const choices = ["TAS", "MAKAS", "KAGIT"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Plays 1 round of RPS
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 1;
  } else if (
    (playerSelection == "TAS" && computerSelection == "MAKAS") ||
    (playerSelection == "KAGIT" && computerSelection == "TAS") ||
    (playerSelection == "MAKAS" && computerSelection == "KAGIT")
  ) {
    return 2;
  } else {
    return 3;
  }
}

// Adds to the player and computer win counters & returns message
function winCounter(roundValue, playerSelection, computerSelection) {
  if (roundValue == 1) {
    return "Bu Oyun Berabere " + playerSelection + ".";
  } else if (roundValue == 2) {
    playerWins++;
    return (
      "Bu Oyunu Kazandin " +
      playerSelection +
      " >>> " +
      computerSelection +
      "."
    );
  } else {
    computerWins++;
    return (
     "Bu Oyunu Kaybettin " +
      playerSelection +
      " <<<" +
      computerSelection +
      "."
    );
  }
}

// Says who won after the game
function whoWon(playerWins, computerWins) {
  if (playerWins == computerWins) {
    console.log("It's a draw!");
  } else if (playerWins > computerWins) {
    console.log("You beat the computer!");
  } else {
    console.log("You got beat by the computer!");
  }
}

// The running of the game
for (button of buttons) {
  button.addEventListener("click", function () {
    let playerSelection = this.textContent;
    let computerSelection = computerPlay();
    let roundValue = playRound(playerSelection, computerSelection);
    let roundWinner = winCounter(
      roundValue,
      playerSelection,
      computerSelection
    );

    gameRoundDiv.classList.add("gameRound", "sep-div");
    playerSelectionDiv.classList.add("playerSelection", "sep-div");
    computerSelectionDiv.classList.add("playerSelection", "sep-div");
    roundWinnerDiv.classList.add("playerSelection", "sep-div");
    playerWinsDiv.classList.add("playerSelection", "sep-div");
    computerWinsDiv.classList.add("playerSelection", "sep-div");

    gameRoundDiv.textContent = "Oynanan Oyun - " + gameRound;
    playerSelectionDiv.textContent = " Senin Secimin: " + playerSelection;
    computerSelectionDiv.textContent =
      " Bilgisayarin Secimi: " + computerSelection;
    roundWinnerDiv.textContent = roundWinner;
    playerWinsDiv.textContent = "Sen: " + playerWins;
    computerWinsDiv.textContent = "Bilgisayar: " + computerWins;

    results.appendChild(gameRoundDiv);
    results.appendChild(playerSelectionDiv);
    results.appendChild(computerSelectionDiv);
    results.appendChild(roundWinnerDiv);
    results.appendChild(playerWinsDiv);
    results.appendChild(computerWinsDiv);
    gameRound++;
  });
}
