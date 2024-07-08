
import React from 'react';
import './Question.css'

const Question = ({ question, options, onAnswer }) => {
  return (
    <div class="container">
        <h1>Devashish GK Quiz</h1>
        <div class="quiz">
            <div class="question">
                <h2>Question</h2>
                <p>{question}</p>
                <div className='options'>
                {options.map((option, index) => (
                  
    <button key={index} onClick={() => onAnswer(option)}>{option}</button>
                   
                    ))}
            
            </div>
            </div>
        </div>
    </div>





  );
};

export default Question;
