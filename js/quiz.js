
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;


	if (question1 == "Halloween") {
		correct++;
}
	if (question2 == "Duro de Matar") {
		correct++;
}	
	if (question3 == "Cheddar") {
		correct++;
	}

	if (question4 == "Doug Judy") {
		correct++;
}
	if (question5 == "Taylor Swift") {
		correct++;
}	
	if (question6 == "Jake") {
		correct++;
	}
	
	var pictures = ["ganhou.gif", "acertou.gif", "perdeu.gif"];
	var messages = ["Você é um expert!", "Bom, mas pode melhorar", "Você precisa assistir de novo"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 6) {
		score = 1;
	}

	if (correct == 6) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Você teve " + correct + " acertos.";
	document.getElementById("picture").src = pictures[score];
	}
	
