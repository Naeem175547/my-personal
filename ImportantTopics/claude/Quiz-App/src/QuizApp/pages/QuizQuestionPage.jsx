import React, { useState } from 'react';
import './QuizQuestionPage.css';

export default function QuizQuestionPage({
  question,
  options,
  currentQuestion,
  totalQuestions,
  timeLeft,
  correctAnswer, // index of the correct answer
  onAnswerSelect,
  onNext
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (onAnswerSelect) {
      onAnswerSelect(options[index]);
    }
  };

  // Timer style logic
  let timerClass = "timer-normal";
  if (timeLeft <= 5) {
    timerClass = "timer-critical";
  } else if (timeLeft <= 10) {
    timerClass = "timer-warning";
  }

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="quiz-page-container">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="quiz-card">
        {/* Header */}
        <div className="quiz-header">
          <div className={`timer-pill ${timerClass}`}>
            <span>⏳</span>
            <span>Time Left: {timeLeft}s</span>
          </div>
          <div className="question-counter">
            Question {currentQuestion} of {totalQuestions}
          </div>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-text">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}% complete</span>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question Body */}
        <div className="quiz-body">
          <h2 className="question-text">{question}</h2>

          <div className="options-list">
            {options.map((option, index) => {
              let statusClass = "";
              if (isAnswered) {
                if (index === correctAnswer) {
                  statusClass = "correct";
                } else if (index === selectedOption) {
                  statusClass = "incorrect";
                }
              } else if (index === selectedOption) {
                statusClass = "selected";
              }

              return (
                <button
                  key={index}
                  className={`option-card ${statusClass}`}
                  onClick={() => handleOptionClick(index)}
                  disabled={isAnswered}
                >
                  <span className="option-badge">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="quiz-footer">
          {isAnswered && (
            <button className="next-button" onClick={onNext}>
              Next Question →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
