import React from "react";
import '../../App.css';


document.getElementById('startQuizButton').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('startQuizButton').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const questionText = "What is the capital of France?";
    document.getElementById('question').innerText = questionText;
}

function answerQuestion(selectedAnswer) {
    alert("You selected: " + selectedAnswer);
}

function Shopping() {
    return (
        <h1 className='Shopping'>Shopping</h1>

    )
};

export default Shopping;