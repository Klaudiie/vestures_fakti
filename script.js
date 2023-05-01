const quizForm = document.getElementById("quiz-form");
const result = document.getElementById("result");

const answers = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b"];

quizForm.addEventListener("submit", (event) => {
	event.preventDefault();
	let score = 0;
	const userAnswers = [
		quizForm.q1.value,
		quizForm.q2.value,
		quizForm.q3.value,
		quizForm.q4.value,
		quizForm.q5.value,
		quizForm.q6.value,
		quizForm.q7.value,
		quizForm.q8.value,
		quizForm.q9.value,
		quizForm.q10.value,
	];

	userAnswers.forEach((answer, index) => {
		if (answer === answers[index]) {
			score++;
		}
	});

	result.innerHTML = `Tu pareizi atbildēji ${score} no 10.`;
});