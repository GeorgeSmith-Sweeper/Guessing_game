  /* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
var playersGuess;
var winningNumber = generateWinningNumber();
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
	var direction = "";
	function directionSwitch() {
		if (playersGuess > winningNumber) {
			direction = "Your guess is higher then the number, ";
			return direction;
		} else {
			direction = "Your guess is lower then the number, ";
			return direction;
		}
	}

	if (Math.abs(winningNumber - playersGuess) <= 5) { // within 5 digits higher
		return directionSwitch() + "you are within 5 digits";
	} else if (Math.abs(winningNumber - playersGuess) <= 5) // within 5 lower
		return directionSwitch() + "you are within 5 digits";
	  else if (Math.abs(winningNumber - playersGuess) <= 10) { // within 10 digits higher
		return directionSwitch() + "you are within 10 digits";
	} else if (Math.abs(winningNumber - playersGuess) <= 10) { // within 10 digits lower
		return directionSwitch() + "you are within 10 digits";
	} else if (Math.abs(winningNumber - playersGuess) <= 20) { // within 20 digits lower
		return directionSwitch() + "you are within 20 digits";
	} else if (Math.abs(winningNumber - playersGuess) <= 20) { // within 20 digits higher
		return directionSwitch() + "you are within 20 digits";
	} else if (Math.abs(winningNumber - playersGuess) > 20) { // more then 20 digits lower
		return directionSwitch() + "you are more than 20 digits away";
	} else if (Math.abs(winningNumber - playersGuess) > 20) { //  more then 20 digits higher
		return directionSwitch() + "you are more than 20 digits away";
	}
}

// message for the DOM 

function guessMessage(){
	$("#updates").text(lowerOrHigher());
}



// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber) {
		$("#updates").text("You guessed the number!");
	} else { 
		if (guessArray.indexOf(playersGuess) !== -1) {  //check if player already added 
			$("#updates").text("You entered " + playersGuess + " already, guess again"); 
		} else {
			numGuesses++; // increment guesses
			guessArray.push(playersGuess); // add guesses to array
			guessMessage(); 
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







