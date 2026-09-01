import React, { useState } from 'react';
import './QuizSetup.css';

export default function QuizSetup({ onStartQuiz, onCancel }) {
  console.log("DEBUG: QuizSetup component is mounting");
  const [count, setCount] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCount(value);

    if (value === "") {
      setError("");
    } else {
      const num = Number(value);
      if (!Number.isInteger(num) || num < 1 || num > 50) {
        setError("Please enter a whole number between 1 and 50");
      } else {
        setError("");
      }
    }
  };

  const handleBegin = () => {
    const num = Number(count);
    if (!isNaN(num) && num >= 1 && num <= 50) {
      onStartQuiz(num);
    } else {
      setError("Please enter a valid number between 1 and 50");
    }
  };

  const isValid = count !== "" &&
                  !isNaN(Number(count)) &&
                  Number.isInteger(Number(count)) &&
                  Number(count) >= 1 &&
                  Number(count) <= 50;

  return (
    <div className="setup-page-wrapper">
      <div className="setup-card">
        <div className="setup-header">
          <h1 className="setup-heading">Ready to Start?</h1>
          <p className="setup-subtitle">How many questions would you like to practice today?</p>
        </div>

        <div className="setup-input-group">
          <label htmlFor="q-count" className="setup-input-label">
            Number of questions
          </label>
          <input
            id="q-count"
            type="number"
            className="setup-input-field"
            placeholder="e.g. 10"
            value={count}
            onChange={handleInputChange}
            autoFocus
          />
          <div className="setup-validation-error">
            {error}
          </div>
        </div>

        <div className="setup-button-container">
          <button
            className="btn-cancel-quiz"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="btn-start-quiz"
            onClick={handleBegin}
            disabled={!isValid}
          >
            Begin Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
