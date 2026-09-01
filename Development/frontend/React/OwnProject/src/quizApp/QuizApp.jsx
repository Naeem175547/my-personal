import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizProvider from "./context/QuizContext";
import Result from "./pages/Result";
import LeaderBoard from "./pages/LeaderBoard";



export default function QuizApp() {
  return (
    <QuizProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/> 
        <Route path="result" element={<Result/>}/>
        <Route path="/leaderboard" element={<LeaderBoard/>}/>
        </Routes>
    </BrowserRouter>
    </QuizProvider>
    
  )
}
