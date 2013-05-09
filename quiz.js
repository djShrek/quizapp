var allQuestions = [
	{
		question: "Who is #24 on the Lakers?",
		choices: ["LeBrown James", "Paul Gazzol", "Kobe Bryant", "Phil Jackson"],
		answer: 3
	},
	{
		question: "Which song is by Nadia Ali??",
		choices: ["Heart Break", "Beam Me Up", "Crash and Burn", "Suit and Tie"],
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
var j = 0;
var userScore = 0;
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
if (j === (allQuestions.length - 1)){
	j = 0;
	clearQuestion();
	displayScore();
	finalDisplay();
}

// If you click on the submit button and there are no radio buttons selected, alert
// that they must choose an answer.



var theAnswer = allQuestions[j].answer;

for (var i = 0; i < buttons.length; i++){
	if (buttons[i].checked === true) {
		a++;
		if (buttons[i].value === theAnswer.toString()){
			userScore++;
			keepTrack.unshift(buttons[i].id);
			clearQuestion();
			createQuestion();
			}
		else {
			clearQuestion();
			createQuestion();
			keepTrack.unshift(buttons[i].id);
			}
			j++;
			console.log(userScore);
		}
	}
}

/* 
removeButtons function is used to delete all
*/

function clearQuestion(){
	questionPlace.innerHTML = "";
	/*var allChildren = questionPlace.childNodes; // old code, which works but not as efficient
		for (var k = 0; k <= allChildren.length; k++){
			k = 0;
				questionPlace.removeChild(allChildren[0]);
					}*/
				}
/*
Order of events:
1. Create encapsulating DIV
2. Create Question
3. Create buttons with corresponding labels

*/

function createQuestion(e){
if (a === allQuestions.length){
	a = 0;
}
// Check which question we are on, if at last question, then reset.
var question = allQuestions[a].question;
var choices = allQuestions[a].choices;
var answer = allQuestions[a].answer;


// 1.
/*
var newDiv = document.createElement('div');
questionPlace.appendChild(newDiv);
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
newNode.value = i + 1; //want the value to start at 1 since we want our answer values to start at 1
newNode.name = "test";
newNode.id = "button" + i;
newNode.label = "button";
newLabel.setAttribute('for', 'button' + i);
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
// have to account for the answers too! 
if (a <= 0){
	a++;
}
if (j <=0 ){
	j++;
}
else {
	j--;
}
var e = --a;
clearQuestion();
createQuestion(e); // create previous question
var keepTrackOfButton = keepTrack.splice(0,1)[0]; // return last button id
var answer = allQuestions[j].answer;
var prevButton = document.getElementById(keepTrackOfButton);
if (prevButton.value === answer.toString()){ // Have to subtract from userScore if they go back and got the previous question right
	userScore--;
}
prevButton.checked = true;
console.log(userScore);


// buttonSet();
}

/* function buttonSet(){
var test = keepTrack.splice(0,1)[0];
var prevButton = document.getElementById(test);
userScore--;
prevButton.checked = true;
}
*/

/*
Code below is basically a "hard" reset, resetting all the variables and clearing
out all the created HTML. 
*/

function startOver(){
console.log(displayScore);
a = 0;
j = 0;
i = 0;
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



// need to make a score box
// Upload to GitHub
// Use OOP to clean up code
// Recreate with jQuery
// Style 
