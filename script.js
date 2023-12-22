// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

// As a user, I want to see my total wins, ties, and losses after each round.

// Specifications
// Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.
// The computer's selection must be random to ensure a fair game.

// PSEUDO-CODE
// need a variable to hold the user's choice
// need a variable to hold the computer's choice
// need an array of the available choices
// need a variable to hold wins 
// need a variable to hold losses
// need a variable to hold ties


//prompt user to enter 'r', 'p', or 's'
    // ? what if they enter something else?
    // ? can we enforce casing?
// need to validate that what was entered is one of the choices
// if not, exit out of the game OR we can call the function again



// generate a random number that is 0, 1, or2
// that number becomes an array index
// acccess the choices array at that index --> that becomes the computer's choice

// Compare the two choices!
// If user beats computer, increment wins --> user's total wins ++ 
// if computer beats user --> user's total losses ++
// if they're the same, increment ties --> user's and computer's ties ++
// display the status (alert)

//confirm wheterh the user wants to plau again
// if so restart the game
// if not return out 

let wins = 0;
let losses = 0;
let ties = 0;

function playGame(){
    document.getElementById("playAgain").style.display = "none"; // Hide the button when the game starts

    const choices = ['R', 'P', 'S'];
    let userChoice = prompt("Enter R, P or S to play").toUpperCase();

    // Validate user's choice
    if (!choices.includes(userChoice)){
        alert("Invalid choice, please enter R, P, or S.");
        return; // exit the function
    }

    //Generate computer's choice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    

    // Determine the outcome
    let resultMessage = "";
    if (userChoice === computerChoice){
        ties++
        resultMessage = "It's a tie!";
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'S' && computerChoice === 'P') ||
        (userChoice === 'P' && computerChoice === 'R')
    ){
        wins ++;
        resultMessage = "You win!"
    } else {
        losses++;
        resultMessage = "You lose!"
    }

    // Consolidated  computer choice, game outcome, and total scores into one message
    let gameSummary = `The computer chose ${computerChoice}. \n${resultMessage}\nTotal Wins: ${wins}, Total Losses: ${losses}, Total Ties: ${ties}`;
    alert(gameSummary)

    // Ask if the user wants to play again
    if (confirm("Do you want to play again?")) {
        playGame();
    }
}

playGame();

