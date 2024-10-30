import React from "react";
import '../../App.css';


function Shopping() {

    const openQuiz = () => {
        window.open('/quiz', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="shopping-page">
        <h1>Shopping Page</h1>
        <button onClick={openQuiz}>Take Quiz</button>
        </div>
    )
};

export function loadQuestion() {
    return "What is the capital of France?";
}

export default Shopping;