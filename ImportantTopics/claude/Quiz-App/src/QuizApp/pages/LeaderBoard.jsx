import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import { motion } from 'framer-motion';

export default function LeaderBoard() {
    const [data, setData] = useState([]);
    const { dispatch } = useContext(QuizContext);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
        setData(stored)
    }, [])

    const clearBoard = () => {
        if(window.confirm("Are you sure you want to clear all scores?")) {
            localStorage.removeItem("leaderboard");
            setData([])
        }
    }

    return (
        <div className="min-h-screen bg-[#4f8784] py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-extrabold text-white mb-12"
                >
                    🏆 Hall of Fame
                </motion.h2>

                {data.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white p-12 rounded-[30px] shadow-2xl border border-gray-100"
                    >
                        <div className="text-6xl mb-4">🏜️</div>
                        <p className='text-gray-500 text-xl'>No Scores yet! Be the first to conquer the quiz.</p>
                    </motion.div>
                ) : (
                    <div className="space-y-12">
                        {/* Top 3 Podium */}
                        <div className="flex items-end justify-center gap-4 mb-12 h-64">
                            {/* 2nd Place */}
                            {data[1] && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "60%" }}
                                    className="w-24 bg-white/80 rounded-t-2xl relative flex flex-col items-center justify-end pb-4 shadow-lg text-[#2a4d4c]"
                                >
                                    <span className="absolute -top-8 font-bold text-white">🥈 2nd</span>
                                    <span className="font-bold">{data[1].name.split(' ')[0]}</span>
                                    <span className="text-sm opacity-70">{data[1].score} pts</span>
                                </motion.div>
                            )}

                            {/* 1st Place */}
                            {data[0] && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "80%" }}
                                    className="w-32 bg-[#ffd700] rounded-t-2xl relative flex flex-col items-center justify-end pb-4 shadow-xl ring-4 ring-yellow-200 text-[#2a4d4c]"
                                >
                                    <span className="absolute -top-10 font-bold text-white text-xl">🥇 1st</span>
                                    <span className="font-bold text-lg">{data[0].name.split(' ')[0]}</span>
                                    <span className="text-sm font-medium opacity-80">{data[0].score} pts</span>
                                </motion.div>
                            )}

                            {/* 3rd Place */}
                            {data[2] && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "40%" }}
                                    className="w-24 bg-white/60 rounded-t-2xl relative flex flex-col items-center justify-end pb-4 shadow-lg text-[#2a4d4c]"
                                >
                                    <span className="absolute -top-8 font-bold text-white">🥉 3rd</span>
                                    <span className="font-bold">{data[2].name.split(' ')[0]}</span>
                                    <span className="text-sm opacity-70">{data[2].score} pts</span>
                                </motion.div>
                            )}
                        </div>

                        {/* All rankings table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[30px] shadow-2xl overflow-hidden border border-gray-100"
                        >
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
                                    <tr className="border-b border-gray-100">
                                        <th className="px-6 py-4">Rank</th>
                                        <th className="px-6 py-4">Player</th>
                                        <th className="px-6 py-4 text-center">Score</th>
                                        <th className="px-6 py-4 text-center">Percentage</th>
                                        <th className="px-6 py-4 text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {data.map((entry, index) => (
                                        <tr key={index} className="hover:bg-yellow-50 transition-colors group">
                                            <td className="px-6 py-4 font-bold text-gray-400 group-hover:text-[#ffd700]">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-[#2a4d4c]">
                                                {entry.name}
                                            </td>
                                            <td className="px-6 py-4 text-center font-bold text-indigo-600">
                                                {entry.score}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                                    {entry.percentage}%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm text-gray-400">
                                                {entry.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                )}

                <div className='flex justify-center gap-4 mt-12'>
                    <Link to="/"
                         onClick={() => dispatch({type: "RESET"})}
                         className="px-8 py-3 bg-[#ffd700] text-[#2a4d4c] rounded-2xl font-bold hover:bg-yellow-400 transition-all shadow-lg">
                        Play Again
                    </Link>
                    <button
                        className="px-8 py-3 bg-white text-red-500 border-2 border-red-100 rounded-2xl font-bold hover:bg-red-50 transition-all"
                        onClick={clearBoard}
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    )
}
