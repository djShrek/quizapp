var allQuestions = [
	{
		question: "Which one of these mutants is not a child of Magneto?",
		choices: ["Scarlet Witch", "Quick Silver", "Polaris", "Havoc"],
		pictures: ["img/thor.jpg", "img/captainA.jpg"],
		answer: 3
	},
	{
		question: "Which song features Nadia Ali??",
		choices: ["Heart Break", "We Are Never Getting Back Together", "Love Story", "In My Mind"],
		pictures: ["img/thor.jpg", "img/captainA.jpg"],
		answer: 3
	},
	{
		question: "How many rings does Phil Jackson have???",
		choices: ["2", "0", "22", "11"],
		pictures: ["img/thor.jpg", "img/captainA.jpg"],
		answer: 4
	},
	{
		question: "Which person is not a Marvel character?",
		choices: ["Captain Marvel", "Cyclops", "The Star-Lord", "Pepper Potts"],
		answer: 1
	},
	{
		question: "Which one of these mutants is not a child of Magneto?",
		choices: ["Scarlet Witch", "Quick Silver", "Polaris", "Havoc"],
		pictures: ["img/thor.jpg", "img/captainA.jpg"],
		answer: 3
	},
	{
		question: "Which song features Nadia Ali??",
		choices: ["Heart Break", "We Are Never Getting Back Together", "Love Story", "In My Mind"],
		answer: 3
	},
	{
		question: "How many rings does Phil Jackson have???",
		choices: ["2", "0", "22", "11"],
		answer: 4
	},
	{
		question: "Which person is not a Marvel character?",
		choices: ["Captain Marvel", "Cyclops", "The Star-Lord", "Pepper Potts"],
		answer: 1
	},
	{
		question: "Who is the most famous mutant on the X-men team?",
		choices: ["Shadowcat", "Wolverine", "Nightcrawler", "Jean Grey"],
		answer: 2
	}
];


// global variables

var a = 0;

var userScore = 0;
var o = 0;
var questionPlace = document.getElementById('quiz');
var buttons = document.getElementsByName("test");
var keepTrack = [];


/*
Create "next" button using JavaScript
*/

/* nextQuestion has two Purposes:
1. Score userScore
2. Switch to Next Question
*/

/* 
1. Grab all buttons that are checked
2. If button checked's value is equal to correctAnswer, userScore++
*/
function scoreUser(){
	checkButton();
	if (a === (allQuestions.length - 1)){
		a = 0;
		userScore++;
		clearQuestion();
		displayScore();
		finalDisplay();
}

// Makes sure user checkes a button
function checkButton(){
var isTrue = false;
for (var z =0; z < buttons.length; z++){
	if (buttons[z].checked === true){
		isTrue = true;
		break;
	}
}
	if (isTrue === false){
		displayError();
	}
}


var theAnswer = allQuestions[a].answer;

for (var i = 0; i < buttons.length; i++){
	if (buttons[i].checked === true) {
		a++; // to change questions, choices, answers
		o = 0; // for displayError;
		if (buttons[i].value === theAnswer.toString()){
			userScore++;
			keepTrack.unshift(buttons[i].id);
			fadeForward();
			}
		else {
			fadeForward();
			keepTrack.unshift(buttons[i].id);
			}
		}
	}
}

function clearQuestion(){ // clear the entire question with buttons, labels, br
	questionPlace.innerHTML = "";
	}

function createQuestion(e){
	if (a === allQuestions.length){
		a = 0; // 
	}
	// Check which question we are on, if at last question, then reset.
	var question = allQuestions[a].question;
	var choices = allQuestions[a].choices;
	var answer = allQuestions[a].answer;


	/*var newQuestionDiv = document.createElement('div'); // Div for questions
		newQuestionDiv.id = "questions"; // Div id 
		questionPlace.appendChild(newQuestionDiv);
	*/

	/* question */

	var question1 = "<div id='theQuestion'></div>";

	/* choices */
	var first = "<div id='choices'><script id='quiz1' type='text/x-handlebars-template'>";
	var second = "{{#choicez choices}}" + "{{this}}" + "{{/choicez}}</script></div>";

		if (questionPlace.innerHTML === ""){
			questionPlace.innerHTML = question1 + first + second;
		}

		var theQuestion = document.getElementById('theQuestion');
		theQuestion.innerHTML = question;


	Handlebars.registerHelper('choicez', function(context, options){
	var theChoices = "";
	for (var i =0; i < context.length; i++ ){
		var choice1 = "<div id=" + "choice" + i + ">" + '\u0020';
		var choice2 = "<input id=button" + i + '\u0020';
		var choice3 = "type='radio'" + "value=" + (i + 1) + '\u0020';
		var choice4 = "name=test" + ">" + "<label for=button" + i + '\u0020';
		var choice5 = ">" + options.fn(context[i]) + "</div>";
		var appendChoice = choice1 + choice2 + choice3 + choice4 + choice5;
		theChoices += appendChoice;
	}

		return theChoices;
});

var quizTemplate = $('#quiz1').html();
var preTemplate = Handlebars.compile(quizTemplate);
var handledTemplate = preTemplate(allQuestions[a]);
$('#choices').append(handledTemplate);

			// For fading pictures in and out

			var newPic = $('#choices div');
			$('#choices div').mouseenter(function(){ // when mouse enters the button
			var thisImage = this.id;
			$('#steve').fadeOut(changeImage).fadeIn();
			function changeImage(){
					switch(thisImage){
						case 'choice0':
							$('#steve').attr('src', allQuestions[a].pictures[0]);
								break;
						case 'choice1':
							$('#steve').attr('src', allQuestions[a].pictures[1]);
								break;
						case 'choice2':
							$('#steve').attr('src', allQuestions[a].pictures[2]);
								break;
						case 'choice3':
							$('#steve').attr('src', allQuestions[a].pictures[3]);
								break;
					}
				}
			});
		}

createQuestion();




function displayScore(){
	var d = document.createElement('div');
		d.id = "displayScore";
		d.textContent = "Your score is: " + userScore + "/5";
		questionPlace.appendChild(d);
		localStorage.userscore = userScore;
}



function finalDisplay(){ // Code to display only the "start over" buttong 
	var back = document.getElementById('back');
	back.style.display  = "none";
	var start = document.getElementById('score');
	start.style.display = "none";
	var startOver = document.getElementById("startOver");
	startOver.style.display = "inline";
}

/*
Go back to the previous question; if first question, just return first question.
*/

function backButton(){
	if (a <= 0){
		a = 0;
	}
	else {
		a--;
		fadeBack();
	}
}

/*
Code below is basically a "hard" reset, resetting all the variables and clearing
out all the created HTML. 
*/

function startOver(){
	a = 0;
	i = 0;
	o = 0;
	userScore = 0;
	keepTrack = [];
	var display = document.getElementById('displayScore');
	questionPlace.removeChild(display);
	clearQuestion();
	createQuestion();
	var back = document.getElementById('back');
	back.style.display  = "inline";
	var start = document.getElementById('score');
	start.style.display = "inline";
	var startAgain = document.getElementById('startOver');
	startAgain.style.display = "none";
}

function displayError(){
	if (o === 0){
		var div1 = document.createElement('div');
		div1.id = "displayError";
		div1.textContent = "You must select an answer";
		questionPlace.appendChild(div1);
		o++;
	}
}

/*
Add jQuery fadeOut and fadeIn effect
*/
function fadeForward(){
$(questionPlace).fadeOut(250, function(){
	clearQuestion();
	createQuestion();
}).fadeIn();
}

function fadeBack(){
$(questionPlace).fadeOut(250, function(){
	var prevValue = keepTrack[0];
	userScore--; // decrement userScore
	clearQuestion();
	createQuestion();
	prevButton = document.getElementById(prevValue);
	prevButton.checked = true;
	keepTrack.shift();
}).fadeIn();
}

var users = [];

// added user authentication using HTML5 storage API. Very basic but just testing the localstorage API.
// This is the sign up form.
function getFormData(){
	var userEmail = document.getElementById('email').value;
	var userPw = document.getElementById('password').value;
	function userName(name, password){
			this.name = name;
			this.password = password;
		}
	if (userEmail === ""){
		alert("Please fill in the username");
		}
	else if (userPw === ""){
		alert("Please fill in the password");
	}
	else {
		localStorage.setItem("username", userEmail);
		localStorage.password = userPw;
		var newUser = new userName(userEmail, userPw);
		users.push(newUser);
	}
}

//added a login screen so users can login with their last quiz score saved.

function returnUser(){
	var oldUser = document.getElementById('enteremail').value;
	var password = document.getElementById('enterpassword').value;
	if (oldUser === localStorage.username){
		if (localStorage.password === password){
			alert("Welcome back " + oldUser + "! " + "Your last quiz score was " + localStorage.userscore);
		}
		else if (password === ""){
			alert("Please enter a password");
		}
		else {
			alert("wrong password!");
		}
	}
	else if (oldUser === ""){
		alert("Please enter a username");
	}
	else {
		alert("There is no user with that name");
	}
}

/* Templating with Handlebars */

