  /* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
var playersGuess,
    winningNumber = generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * (100 - 1) + 1);
};


// Fetch the Players Guess
function playersGuessSubmission(){
	playersGuess = +$(document.getElementById("playersGuess")).val();
};

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	var numGuesses = 0;
	var guessValues = [];

	
	if (playersGuess === winningNumber) {
		console.log("The player wins");
	} else if (playersGuess !== winningNumber) {
		console.log("Try Again");
	}	
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

$(document).ready(winningNumber);