import { useEffect, useContext, useState, useRef } from 'react'
import { QuizContext } from "../context/QuizContext"
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import QuizQuestionPage from './../pages/QuizQuestionPage';
import useTimer from '../hooks/useTimer';

export default function Quiz() {
  const { state, dispatch } = useContext(QuizContext)
  const { index, questions } = state;
  const navigate = useNavigate();
  const { time, reset } = useTimer(15)
  const [howManyQuestion, setHowManyQuestion] = useState(null)
  const hasPrompted = useRef(false);

  useEffect(() => {
    if (hasPrompted.current) return;
    hasPrompted.current = true;
  }, []);

  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "ANWSER", payload: false })
      reset()
    }
  }, [time])

  if (!questions || questions.length === 0) {
    return <h2 className='text-center mt-5 font-bold text-white'>Loading Questions...</h2>
  }

  if (howManyQuestion === null) {
    return (
      <QuizSetup
        onStartQuiz={(count) => setHowManyQuestion(count)}
        onCancel={() => navigate("/")}
      />
    );
  }

  if (index >= howManyQuestion || index >= questions.length) {
    dispatch({ type: "FINISH" })
    navigate("/result")
    return null;
  }

  const current = questions[index]

  return (
    <QuizQuestionPage
      question={current.question}
      options={current.options}
      currentQuestion={index + 1}
      totalQuestions={howManyQuestion}
      timeLeft={time}
      correctAnswer={current.options.indexOf(current.answer)}
      onAnswerSelect={(option) => {
        dispatch({ type: "ANSWER_QUESTION", payload: option === current.answer });
        reset();
      }}
      onNext={() => {
        dispatch({ type: "NEXT_QUESTION" });
      }}
    />
  );
}
