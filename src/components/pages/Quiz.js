import React, { useState } from 'react';
import './Shopping.css'
import { loadQuestion } from './Shopping';

function Quiz() {
    const [quizStarted, setQuizStarted] = useState(true);
    const [question, setQuestion] = useState(loadQuestion);

    const answerQuestion = (selectedAnswer) => {
        alert("You selected: " + selectedAnswer);
    };

    return (
        <div className="quiz-container">
            <h1>Quiz Page</h1>
            <p>{question}</p>
            <button onClick={() => answerQuestion('a')}>Answer A</button>
            <button onClick={() => answerQuestion('b')}>Answer B</button>
            <button onClick={() => answerQuestion('c')}>Answer C</button>
            <button onClick={() => answerQuestion('d')}>Answer D</button>
        </div>
    );
}

export default Quiz;
