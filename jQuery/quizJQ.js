var allQuestions = [{
		question: "Who is #24 on the Lakers?",
		choices: ["LeBrown James", "Paul Gazzol", "Kobe Bryant", "Tiger Woods"],
		answer: 3
	},
	{
		question: "Which song features Nadia Ali??",
		choices: ["Heart Break", "We Are Never Getting Back Together", "Love Story", "In My Mind"],
		answer: 3
	},
	{
		question: "Who is the Pumpkin King?",
		choices: ["Jack Sparrow", "Jack Nicholson", "Jack Skellington", "Jack Black"],
		answer: 3
	},
	{
		question: "Who is not a member of the modern Avengers?",
		choices: ["The Scarlet Witch", "Wolverine", "Rocket Racoon", "Iron Man"],
		answer: 3
	}
	];

var j = 0; // FOR CHOICES
// var question = allQuestions[j].question;
// var choices = allQuestions[j].choices;
var userScore = 0;
var quiz = $('#quiz');
var previous = [];

/*Event handlers coded in JS instead of hard coding into HTML*/

var backButtons = $('#backButton');
backButtons.click(function(){
	previousButton();
	});

var submitButton = $('#submitButton');
submitButton.click(function(){
	scoreUser();
	});

var resetButton = $('#reset');

function createQuestion(back){

// variables
var question = allQuestions[j].question;
var choices = allQuestions[j].choices;
	quiz.text(question);
	quiz.append(newBreak); // Check if working

for (var i = 0; i < choices.length; i++){
	var newButton = $('<input type="radio" />')
						.attr({ id:"button" + (i+1),
							name:"quizButtons",
								value: (i+1)
							});
					
	var newBreak = $('<br>');
	var newLabel = $('<label>')
			.attr('for', 'button' + (i + 1))
				.text(choices[i]);
	quiz.append(newBreak);
	quiz.append(newButton);
	quiz.append(newLabel);
	}
}


createQuestion();

function scoreUser(){

var answer = allQuestions[j].answer;
var buttons = $("input[type='radio']");
var buttonValue = $("input[type='radio']:checked").val();
var buttonId = $("input[type='radio']:checked").attr('id');

	if (buttons.is(":checked")) {
		if (buttonValue == answer){
				j++; // increment so we can move on to the next question
				userScore++; // score up by 1 if correct answer
				// quiz.empty(); // Delete all nodes including text
			}
		else{
				j++;
				
			}
		if (j === allQuestions.length){
			previous.unshift(buttonId);
			quiz.empty();
			displayScore();
			}
		else{
			previous.unshift(buttonId);
			createQuestion();
			}
			console.log(previous);
		}
		console.log(userScore);
}


function displayScore(){
var score = "Your score is " + userScore;
	quiz.text(score);
	resetButton.css('display', 'inline');
	submitButton.css('display', 'none');
	backButtons.css('display', 'none');
	
}

function previousButton(){

/*
Section is what allows the back button to move the quiz backwards.
*/

if (j > 0){
	j--;
	if (userScore > 0) { // only decrement if the userScore is greater than 1
		userScore--;
	}
	createQuestion();
	checkButton();
	previous.shift(); // remove previously stored value
	// j--; // decrement j so that it changes the question and buttons accordingly.
	}
else {
	j = 0; // if it tries to decrement when less than 0, change j to 0 so it doesn't go less than 0.
	createQuestion();
	}
}

/*
Function is place the correct radio button when pressing back button,
basically memorizing the previous value. 
*/
function checkButton(){
var buttonId = document.getElementById(previous[0]);
buttonId.checked = true;
}

function reset(){
j = 0;
userScore = 0;
previous = [];
createQuestion();
	resetButton.css('display', 'none');
	submitButton.css('display', 'inline');
	backButtons.css('display', 'inline');
}

