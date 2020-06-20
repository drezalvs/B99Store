
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2;
	var question3 = document.quiz.question3;
	var question4 = document.quiz.question4;
	var question5 = document.quiz.question5;
	var question6 = document.quiz.question6;
	var correct = 0;


	if (question1 == "Halloween") {
		correct++;
}
	if (question2[0].checked) {
		correct++;
}	

	if (question3[1].checked) {
		correct++;
	}

	if (question4[0].checked) {
		correct++;
}
	if (question5[0].checked) {
		correct++;
}	
	if (question6[1].checked) {
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
	
