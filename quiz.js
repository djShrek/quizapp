var allQuestions = [
	{
		question: "Which one of these mutants is not a child of Magneto?",
		choices: ["Scarlet Witch", "Quick Silver", "Polaris", "Nightcrawler"],
		pictures: ["img/q1/scarletwitch.jpg", "img/q1/quicksilver.jpg","img/q1/polaris2.jpg","img/q1/nightcrawler.jpg"],
		answer: 4
	},
	{
		question: " Which one of these mutants is a founding member of the original X-men team?",
		choices: ["Wolverine", "Psylocke", "Ice Man", "Deadpool"],
		pictures: ["img/q2/wolverine.jpg", "img/q2/vampy2.jpg","img/q2/iceman5.jpg","img/q2/deadpool2.jpg"],
		answer: 3
	},
	{
		question: "What is Spider-Man's real name?",
		choices: ["Peter Petrelli", "Peter Parker", "Peter Piper", "Peter Pan"],
		pictures: ["img/q3/spidey.jpg", "img/q3/ironspider.jpg","img/q3/blackspiderman.jpg","img/q3/scarlet.jpg"],
		answer: 2
	},
	{
		question: "Who is currently both a member of the X-Men and Avengers??",
		choices: ["Wolverine", "Cyclops", "The Star-Lord", "Rocket Racoon"],
		pictures: ["img/q4/logan1.jpg", "img/q4/cyclops.jpg","img/q4/starlord.jpg","img/q4/rocket.jpg"],
		answer: 1
	},
	{
		question: "After The Human Torch had seemingly been killed, who did he request in his will to take his place in the Fantastic Four?",
		choices: ["Iron-Man", "BatMan", "Ant-Man", "Spider-Man"],
		pictures: ["img/q5/ironman.jpg", "img/q5/batman.jpg","img/q5/antman.jpg","img/q5/spiderman.jpg"],
		answer: 4
	},
	{
		question: "Which one of these Marvel villains is the leader of his own sovereign nation?",
		choices: ["Dr.Doom", "Doctor Octopus", "Dr.Strange", "Dr.Sheldon Cooper"],
		pictures: ["img/q6/doom.jpg", "img/q6/doc.jpg","img/q6/drstrange1.jpg","img/q6/sheldon.jpg"],
		answer: 1
	},
	{
		question: "Which one of these Avengers did not appear in the Avengers movie?",
		choices: ["Captain America", "Vision", "Thor", "Hawkeye"],
		pictures: ["img/q7/cap.jpg", "img/q7/vision.jpg","img/q7/thor.jpg","img/q7/hawkeye2.jpg"],
		answer: 2
	},
	{
		question: "Daredevil is awesome because he can kickass even though he has a lack of ____",
		choices: ["Hearing", "Estrogen", "Sight", "Smell"],
		pictures: ["img/q8/daredevil.jpg", "img/q8/daredevil2.jpg","img/q8/daredevil3.jpg","img/q8/daredevil4.jpg"],
		answer: 3
	},
	{
		question: "The mutant known as Rogue gained her superhuman strength and ability to fly by absorbing the powers of which Avenger?",
		choices: ["Ms.Marvel", "Marvel Girl", "The Wasp", "Spider-Woman"],
		pictures: ["img/q9/msmarvel.jpg", "img/q9/marvelgirl1.png","img/q9/wasp.jpg","img/q9/spiderwoman.jpg"],
		answer: 1
	},
	{
		question: "Bruce Banner, aka The Hulk, has a crazy history with other Hulks. His cousin Jennifer is the She-Hulk, his arch-nemesis becomes the Red-Hulk, and his main romantic interest Betty is the ___",
		choices: ["Pink Hulk", "Red She-Hulk", "Grey Hulk", "Hulkling"],
		pictures: ["img/q10/hulk1.jpg", "img/q10/redshehulk.jpg","img/q10/redhulk1.jpg","img/q10/shehulk.jpg"],
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
	a = 0;
	clearQuestion();
	displayScore();
	finalDisplay();
	}
	// Check which question we are on, if at last question, then reset.
	var question = allQuestions[a].question;
	var choices = allQuestions[a].choices;
	var answer = allQuestions[a].answer;

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
			$('#choices div').stop(true).mouseenter(function(){ // when mouse enters the button
			var thisImage = this.id;
			$('#steve').stop(true).fadeOut(changeImage).fadeIn();
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
	var modal = document.getElementById('modalBody');
		modal.textContent = "Your score is: " + userScore + "/10";
		$('#myModal').modal('show');
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
	// var display = document.getElementById('displayScore');
	// questionPlace.removeChild(display);
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
		$('.alert').on('click').stop(true).fadeIn().delay(2500).fadeOut();
	}
}

/*
Add jQuery fadeOut and fadeIn effect
*/
function fadeForward(){
$(questionPlace).fadeOut(250, function(){
	a++;
	console.log('fadeforward');
	console.log('userScore');
	console.log(userScore);
	console.log('a');
	console.log(a);
	clearQuestion();
	createQuestion();
}).fadeIn();
}

function fadeBack(){
$(questionPlace).fadeOut(250, function(){
	var prevValue = keepTrack[0];
	userScore--; // decrement userScore
	if (userScore < 0){
		userScore = 0;
	}
	clearQuestion();
	createQuestion();
	prevButton = document.getElementById(prevValue);
	prevButton.checked = true;
	keepTrack.shift();
	console.log('backward');
	console.log('userScore');
	console.log(userScore);
	console.log('a');
	console.log(a);
}).fadeIn();
}



