import React from 'react';
import './QuizResults.css';

export default function QuizResults({
  userName,
  score,
  totalQuestions,
  timeTaken,
  onRestart,
  onGoHome
}) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 80) return "Excellent work! 🌟";
    if (percentage >= 50) return "Good effort! 👍";
    return "Keep practicing! 📚";
  };

  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;

  return (
    <div className="results-page-container">
      <div className="results-card">
        {/* Header */}
        <div className="results-header">
          <h1 className="results-title">
            <span>🏆</span> Quiz Complete!
          </h1>
          <p className="results-subtitle">
            Congratulations, {userName}! You've finished the challenge.
          </p>
        </div>

        {/* Score Indicator */}
        <div className="score-visual-container">
          <div className="score-circle">
            <span className="score-number">{score}</span>
            <span className="score-label">out of {totalQuestions}</span>
          </div>
        </div>
        <div className="percentage-text">{percentage}%</div>

        {/* Performance Message */}
        <div className="performance-msg">
          {getPerformanceMessage()}
        </div>

        {/* Review Section */}
        <div className="review-section">
          <div className="review-item">
            <span className="review-value" style={{ color: '#4caf50' }}>{correctAnswers}</span>
            <span className="review-label">Correct</span>
          </div>
          <div className="review-item">
            <span className="review-value" style={{ color: '#f44336' }}>{incorrectAnswers}</span>
            <span className="review-label">Incorrect</span>
          </div>
        </div>

        <p className="time-taken">Total time taken: <strong>{timeTaken}</strong></p>

        {/* Action Buttons */}
        <div className="results-actions">
          <button className="btn-restart" onClick={onRestart}>
            Try Again
          </button>
          <button className="btn-home" onClick={onGoHome}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
