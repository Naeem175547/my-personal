import { useEffect, useContext, useState } from 'react'
import {QuizContext} from "../context/QuizContext"
import { useNavigate } from 'react-router-dom'
import Timer from './../components/Timer';
import ProgressBar from './../components/ProgressBar';
import QuestionCard from './../components/QuestionCard';
import useTimer from '../hooks/useTimer';



export default function Quiz() {
  const {state, dispatch} = useContext(QuizContext)
  const {index, questions } = state;
  const navigate = useNavigate();
  const {time, reset} = useTimer(15)
  const [howManyQuestion,setHowManyQuestion]=useState(null)

useEffect(() => {
  const value = Number(prompt("how many question do you want to practice"));

  if (!isNaN(value) && value > 0) {
    setHowManyQuestion(value);
  } else {
    alert("Please enter a valid number greater than 0");
    navigate("/");
  }
}, []);


  useEffect(() => {
    if(time === 0){
      dispatch({type: "ANWSER", payload: false})
      reset()
    }
  }, [time])

  if(!questions || questions.length === 0){
    return <h2 className='text-center mt-5'>Loading Questions...</h2>
  }



  if(index >= howManyQuestion || index>=questions.length){
    dispatch({type: "FINISH"})
    navigate("/result")
    return null;
  }

  const current = questions[index]

  const handleSelect = (option) =>{
    dispatch({type: "ANWSER", payload: option === current.answer})
    reset();
  }

  return (
    <div className="container mt-4">
        <Timer time={time} />
        <ProgressBar current={index} total={questions.length} />
        <QuestionCard
            question={current.question}
            options={current.options}
            onSelect={handleSelect}
        />
    </div>
  )
}
