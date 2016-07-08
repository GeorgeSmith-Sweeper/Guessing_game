  /* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
(function(){
	var playersGuess;
	var winningNumber = generateWinningNumber();
	var numGuesses = 0;
	var guessArray = [];
	var guessesRemaining = 5;
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
	} else if (Math.abs(winningNumber - playersGuess) <= 5) {// within 5 lower
		return directionSwitch() + "you are within 5 digits.";
	}else if (Math.abs(winningNumber - playersGuess) <= 10) { // within 10 digits higher
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


// Game Over Lose
function gameOver() {
	$(".jumbotron").css("background-image", "url(gameOver.gif)");
	$("#mainTitle").text("You Lose").css("color", "white");
	$("p").text("");
	$("#playersGuessInput, #hintBtn, #submitBtn").prop("disabled", true); // disable input, hint, and submit
}


// Game Over Winner
function youWin() {
	$(".jumbotron").css("background-image", "url(fireworks.gif)")
	$("#mainTitle").text("You Win").css("color", "white");
	$("p").text("");
	$("#playersGuessInput, #hintBtn, #submitBtn").prop("disabled", true);
}


// Check if the Player's Guess is the winning number 
function checkGuess(){ 
	//var guessesRemaining = 5;
	if (isNaN(playersGuess) || playersGuess < 1 || playersGuess > 100) { // NaN, less than one, greater than 100
		$("#updates").text("Invalid entry, try again");
	} else {
		if (playersGuess === winningNumber) {
			youWin();
		} else { 
			if (guessArray.indexOf(playersGuess) !== -1) {  // check if players guess is duplicate 
				$("#updates").text("You entered " + playersGuess + " already, guess again"); 
			} else {
				numGuesses++; // increment guesses
				guessesRemaining--; // decrement guesses remaining
				$("p").append("p").text("You have " + guessesRemaining + " guesses left."); //remaining guesses countdown
				guessArray.push(playersGuess); // add guesses to array
				guessMessage(); 
				if (numGuesses >= 5) {
					gameOver();
				}
			}
		}
	}
}


// Create a provide hint button that provides additional clues to the "Player"
function provideHint(){
	function randomNumHintGen(){ //create random number each time function is called
		return Math.floor(Math.random() * (100 - 1) + 1);
	}
	var hintArray = [winningNumber];
	if (numGuesses === 1) {  // one guess
		for (var i = 0; i < 7; i++) {
			hintArray.push(randomNumHintGen());
		}
	} else if (numGuesses === 2) { // two guesses
		for (var i = 0; i < 5; i++) {
			hintArray.push(randomNumHintGen());
		}
	} else if (numGuesses === 3) { // three guesses
		for (var i = 0; i < 3; i++) {
			hintArray.push(randomNumHintGen());
		}
	} else if (numGuesses === 4) { // four guesses
		for (var i = 0; i < 1; i++) {
			hintArray.push(randomNumHintGen());
		}
	}
	return hintArray;
}


/* **** Event Listeners/Handlers ****  */


// listen for enter key press on input field
$("#playersGuessInput").on("keyup", function(enter) {
	if (enter.keyCode === 13) {
		playersGuessSubmission();
		checkGuess();
		lowerOrHigher();
	}
});

//submit button
$("#submitBtn").click(function() {
	playersGuessSubmission();
	checkGuess();
	lowerOrHigher();
});

// hint button functionality
$("#hintBtn").click(function() {
	if (numGuesses === 0) { 
		// response for pressing hint without guessing
		$("#updates").text("You haven't even guessed! No hint for you!")
	} else {
		provideHint();
		// show hintArray 
		$("#updates").text("One of these values is the winning number, [" + provideHint() + "], submit a guess!");
	}
});


// reset the page if "playAgain" button is clicked
$("#playAgain").click(function() {
	document.location.reload(true);
});


// generate number when the DOM is ready
$(document).ready(winningNumber);
}());






























