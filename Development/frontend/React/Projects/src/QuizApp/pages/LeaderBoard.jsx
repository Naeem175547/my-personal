import {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';


export default function LeaderBoard() {
    const [data, setData] = useState([]);
    const { dispatch}=useContext(QuizContext);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
        setData(stored)
    }, [])

    const clearBoard = () => {
        localStorage.removeItem("leaderboard");
        setData([])
    }

  return (
    <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
        {data.length === 0 ? (
            <div>
                <p className='text-muted'>No Scores yet! Play the quiz.</p>
            
            </div>

        ) : (
            <table className="table table-striped shadow">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry,index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{entry.name}</td>
                        <td>{entry.score}</td>
                        <td>{entry.percentage}%</td>
                        <td>{entry.date}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        
        )}
        <div className='d-flex justify-content-center gap-2'>
            <Link to="/" 
                 onClick={() => dispatch({type: "RESET"})}
                 className="btn btn-warning">
                    Home
                </Link>
        <button 
            className="btn btn-danger "
            onClick={clearBoard}
        >Clear Leaderboard
        </button>
        </div>
        </div>
    
  )
}
