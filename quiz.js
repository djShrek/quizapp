	var allQuestions = [
	{
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

// variables
var a = 0;
// var j = 0; 
var userScore = 0;
var o = 0;
var questionPlace = document.getElementById('quizQuestion');
var buttons = document.getElementsByName("test");
// var theAnswer = allQuestions[j].answer;
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
if (a === (allQuestions.length - 1)){ //j
	a = 0; // j 
	clearQuestion();
	displayScore();
	finalDisplay();
}

// If you click on the submit button and there are no radio buttons selected, alert
// that they must choose an answer.

if (buttons[0].checked === false)
	if (buttons[1].checked === false)
		if (buttons[2].checked === false)
			if (buttons[3].checked === false){
				displayError();
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
			//clearQuestion();
			//createQuestion();
			}
		else {
			fadeForward();
			//clearQuestion();
			//createQuestion();
			keepTrack.unshift(buttons[i].id);
			}
			// j++; // for answers
		}
	}
	console.log(keepTrack);
}

/* 
removeButtons function is used to delete all
*/

function clearQuestion(){ // clear the entire question with buttons, labels, br
	questionPlace.innerHTML = "";

				}
/*
Order of events:
1. Create encapsulating DIV
2. Create Question
3. Create buttons with corresponding labels

*/

function createQuestion(e){
if (a === allQuestions.length){
	a = 0; // 
}
// Check which question we are on, if at last question, then reset.
var question = allQuestions[a].question;
var choices = allQuestions[a].choices;
var answer = allQuestions[a].answer;

// 1.
/*

*/
// 2. 
var newQuestion = document.createTextNode(question);
questionPlace.appendChild(newQuestion);

// 3. 

for (var i = 0; i < choices.length; i++){
var newNode = document.createElement("input");
var newLabel = document.createElement("label");
var newBr = document.createElement("br");
newNode.type = "radio";
newNode.class = "buttons";
newNode.value = i + 1; //want the value to start at 1 since we want our answer values to start at 1
newNode.name = "test";
newNode.id = "button" + i;
newNode.label = "button";
newLabel.setAttribute('for', 'button' + i);
newLabel.name = "test";
newLabel.textContent = choices[i];
questionPlace.appendChild(newBr);
questionPlace.appendChild(newNode);
questionPlace.appendChild(newLabel);
}
}

createQuestion();

function displayScore(){
var d = document.createElement('div');
d.id = "displayScore";
d.textContent = "Your score is: " + userScore + "/10";
questionPlace.appendChild(d);
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
console.log(displayScore);
a = 0;
// j = 0;
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
	clearQuestion();
	createQuestion();
	var prevValue = keepTrack[0];
	prevButton = document.getElementById(prevValue);
	prevButton.checked = true;
	keepTrack.shift();
}).fadeIn();
}


