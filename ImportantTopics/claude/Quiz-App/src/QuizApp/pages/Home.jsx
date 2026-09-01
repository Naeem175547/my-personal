import { useState, useContext } from 'react'
import { QuizContext } from "../context/QuizContext"
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [name, setName] = useState("")
  const { dispatch } = useContext(QuizContext)
  const navigate = useNavigate()

  const onStartQuiz = (userName) => {
    dispatch({ type: "SET_NAME", payload: userName })
    navigate("/quiz")
  }

  const handleStart = () => {
    if (name.trim()) {
      onStartQuiz(name)
    }
  }

  return (
    <div className="home-container">
      {/* Abstract Background Shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="home-card">
        {/* Circular Logo */}
        <div className="logo-container">
          <span className="logo-main">QUIZ</span>
          <span className="logo-sub">Khelo</span>
        </div>

        {/* Input Section */}
        <div className="input-group">
          <label htmlFor="username" className="input-label">Enter your name</label>
          <input
            id="username"
            type="text"
            className="name-input"
            placeholder="John Doe..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Start Button */}
        <button
          className="start-button"
          onClick={handleStart}
          disabled={!name.trim()}
        >
          Start
        </button>
      </div>
    </div>
  )
}
