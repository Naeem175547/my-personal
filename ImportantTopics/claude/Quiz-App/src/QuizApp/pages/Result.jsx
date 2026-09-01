import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import { QuizContext } from "../context/QuizContext"
import { motion } from 'framer-motion'

export default function Result() {
  const { state, dispatch } = useContext(QuizContext)

  const percentage = Math.round((state.score / state.questions.length) * 100);

  useEffect(() => {
    const entry = {
      name: state.username,
      score: state.score,
      percentage,
      date: new Date().toLocaleString()
    }

    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const updated = [...stored, entry]

    updated.sort((a, b) => b.score - a.score);

    localStorage.setItem("leaderboard", JSON.stringify(updated))
  }, [])

  const getPerformanceBadge = () => {
    if (percentage === 100) return { text: "Perfect Score! 🏆", color: "text-yellow-500" };
    if (percentage >= 80) return { text: "Amazing Job! 🌟", color: "text-green-500" };
    if (percentage >= 50) return { text: "Good Effort! 👍", color: "text-blue-500" };
    return { text: "Keep Practicing! 📚", color: "text-gray-500" };
  }

  const badge = getPerformanceBadge();

  return (
    <div className="min-h-screen bg-[#4f8784] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-[30px] shadow-2xl w-full max-w-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>

        <h2 className="text-3xl font-extrabold text-[#2a4d4c] mb-2">Quiz Completed!</h2>
        <p className="text-gray-600 mb-6">{state.username}, here is how you did:</p>

        <div className="relative flex items-center justify-center mb-8">
          <svg className="w-32 h-32">
            <circle
              cx="64" cy="64" r="58"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <motion.circle
              cx="64" cy="64" r="58"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 58}
              initial={{ strokeDashoffset: 2 * Math.PI * 58 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 58 * (1 - percentage / 100) }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[#ffd700]"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-4xl font-black text-[#2a4d4c]">{state.score}</span>
            <span className="text-gray-500 block text-sm">Score</span>
          </div>
        </div>

        <div className={`text-xl font-bold mb-8 ${badge.color}`}>
          {badge.text}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/leaderboard"
            className="flex-1 py-4 bg-[#2a4d4c] text-white rounded-2xl font-bold hover:bg-[#1e3a39] transition-all shadow-lg text-center"
          >
            View Leaderboard
          </Link>
          <Link
            to="/"
            onClick={() => dispatch({ type: "RESET" })}
            className="flex-1 py-4 bg-[#ffd700] text-[#2a4d4c] rounded-2xl font-bold hover:bg-yellow-400 transition-all shadow-lg text-center"
          >
            Try Again
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
