
$(document).ready(function(){
	
  	/*--- Select random secret number between 1 and 100 ---*/
	secret = Math.floor((Math.random() * 100) + 1);
	alert(secret);
	count = 0;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	$(".new").click(function(){
  		newGame();
  	});

  	$(".button").click(function(event){
  		event.preventDefault();
  		var guess = $('#userGuess').val().trim();
  		if ($.isNumeric(guess) && parseInt(guess) >= 1 && parseInt(guess) <= 100) {
  			processGuess(guess);
  		}
  		else {
  			alert("Your entry is invalid. Please reenter your guess, which should be a number between 1 and 100.");
  		  	$('input:text').val("");
  		}
  		
  	});


	function processGuess(guess) {
  		if (guess == secret) {
  			$('#feedback').text('You guessed just right - YOU WIN!');
  			alert('Select +NEW GAME in the upper-right corner if you want to play again');
  		} else {
  			/*--- append guess ---*/
  			$("#guessList").append('<li class="clearOut">'+guess+'</li>');
  			$('input:text').val("");
  			count += 1;
  			$('#count').text(count);
  			$('#feedback').text(getFeedback(guess));
  		}
  	}


  	function getFeedback(guess) {
  		var diff = Math.abs(parseInt(guess)-secret);
  		var difftype = "low";
  		if (guess > secret) {
  			difftype = "high"
  		}

  		if (diff >= 50) {
			return "Your guess is too "+difftype+" and is ice cold!";
		}
  		if (diff >= 30) {
			return "Your guess is too "+difftype+" and is cold.";
		}
		if (diff >= 20) {
			return "Your guess is too "+difftype+" and is warm.";
		}
		if (diff >= 10) {
			return "Your guess is too "+difftype+" and is hot.";
		}
		if (diff >= 1) {
			return "Your guess is too "+difftype+" and is very hot!";
		}
  	}


  	function newGame() {
  		/*--- Clear old screen content ---*/
  		$('input:text').val("");
 		count = 0;
 		$('#count').text(count);
 		$('.clearOut').remove();
  		/*--- Select random secret number between 1 and 100 ---*/
  		secret = Math.floor((Math.random() * 100) + 1);
  		alert(secret);
  	}

});


