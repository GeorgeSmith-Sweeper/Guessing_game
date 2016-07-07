  /* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
var playersGuess,
    winningNumber = generateWinningNumber();

var numGuesses = 0;
var guessArray = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * (100 - 1) + 1);
};


// Fetch the Players Guess
function playersGuessSubmission(){
	playersGuess = +$(document.getElementById("playersGuessInput")).val();
	$(document.getElementById("playersGuessInput")).val("");
};

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber) {
		$("#updates").text("You guessed the number!");
	} else { 
		if (guessArray.indexOf(playersGuess) !== -1) {
			$("#updates").text("You entered " + playersGuess + " already, guess again"); 
		} else {
			numGuesses++; // increment guesses
			guessArray.push(playersGuess); // add guesses to array
			$("#updates").text("Guess again");
		}
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

// $("#subBtn").click(function() {
// 	playersGuessSubmission();
// 	guessValues.push(playersGuess);
// 	console.log(guessValues);
// });

$(document).ready(winningNumber);







