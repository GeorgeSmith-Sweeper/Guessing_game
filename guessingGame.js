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
	function directionSwitch() {
		var direction = "";
		if (playersGuess > winningNumber) {
			direction = "Your guess is higher then the number, ";
			return direction;
		} else {
			direction = "Your guess is lower then the number, ";
			return direction;
		}
	}

	if (Math.abs(winningNumber - playersGuess) <= 5) { // within 5 digits higher
		return directionSwitch() + "you are within 5 digits.";
	} else if (Math.abs(winningNumber - playersGuess) <= 5) // within 5 lower
		return directionSwitch() + "you are within 5 digits.";
	  else if (Math.abs(winningNumber - playersGuess) <= 10) { // within 10 digits higher
		return directionSwitch() + "you are within 10 digits.";
	} else if (Math.abs(winningNumber - playersGuess) <= 10) { // within 10 digits lower
		return directionSwitch() + "you are within 10 digits.";
	} else if (Math.abs(winningNumber - playersGuess) <= 20) { // within 20 digits lower
		return directionSwitch() + "you are within 20 digits.";
	} else if (Math.abs(winningNumber - playersGuess) <= 20) { // within 20 digits higher
		return directionSwitch() + "you are within 20 digits.";
	} else if (Math.abs(winningNumber - playersGuess) > 20) { // more then 20 digits lower
		return directionSwitch() + "you are more than 20 digits away.";
	} else if (Math.abs(winningNumber - playersGuess) > 20) { //  more then 20 digits higher
		return directionSwitch() + "you are more than 20 digits away.";
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
	function randomNumHintGen(){ //create random number each time function is called
		return Math.floor(Math.random() * (100 - 1) + 1);
	}
	var hintArray = [winningNumber];
	if (numGuesses === 1) {
		for (var i = 0; i < 7; i++) {
			hintArray.push(randomNumHintGen());
		}
	} else if (numGuesses === 2) {
		for (var i = 0; i < 5; i++) {
			hintArray.push(randomNumHintGen());
		}
	} else if (numGuesses === 3) {
		for (var i = 0; i < 3; i++) {
			hintArray.push(randomNumHintGen());
		}
	} else if (numGuesses === 4) {
		for (var i = 0; i < 1; i++) {
			hintArray.push(randomNumHintGen());
		}
	}
	return hintArray;
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

$("submitBtn").click(function() {

});


$("#hintBtn").click(function() {
	if (numGuesses === 0) {
		$("#updates").text("You haven't event guessed! No hint for you!")
	} else {
	provideHint();
	$("#updates").text("One of these values is the winning number, [" + provideHint() + "], submit a guess!");
	}
});


$(document).ready(winningNumber);


































