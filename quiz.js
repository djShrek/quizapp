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
if (j === allQuestions.length){
	j = 0;
}

var theAnswer = allQuestions[j].answer;
var buttons = document.getElementsByName("test");
for (var i = 0; i < buttons.length; i++){
	if (buttons[i].checked === true) {
		a++;
		console.log(theAnswer);
		if (buttons[i].value === theAnswer.toString()){
			userScore++;
			removeButtons();
			createQuestion();
			displayScore();
			}
		else {

			removeButtons();
			createQuestion();
			displayScore();
		}
		j++;
		}
	}
}

/* 
removeButtons function is used to delete all
*/

function removeButtons(){
	var allChildren = questionPlace.childNodes;
		for (var k = 1; k <= allChildren.length; k++){
			k = 0;
				questionPlace.removeChild(allChildren[k]);
					}
				}
/*
Order of events:
1. Create encapsulating DIV
2. Create Question
3. Create buttons with corresponding labels

*/

function createQuestion(){
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
displayScore();
// need to make a score box
// Upload to GitHub
// Use OOP to clean up code
// Recreate with jQuery
// Style 

var testOOP = function(){
var object1 = {
newInput: function(){document.createElement('')}

}
}
