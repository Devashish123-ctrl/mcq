import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';


const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Mars", "Venus", "Jupiter", "Saturn"],
    "answer": "Mars"
  }
,{
  "question": "What is the largest ocean on Earth?",
  "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  "answer": "Pacific Ocean"
}
,{
  "question": "Who wrote the play 'Romeo and Juliet'?",
  "options": ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
  "answer": "William Shakespeare"
}
,{
  "question": "What is the smallest prime number?",
  "options": ["1", "2", "3", "5"],
  "answer": "2"
}
 
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <Score score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
