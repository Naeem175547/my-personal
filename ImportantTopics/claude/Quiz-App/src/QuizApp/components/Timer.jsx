import { motion } from 'framer-motion'

export default function Timer({time}) {
  const isLowTime = time <= 5;

  return (
    <div className={`flex items-center justify-center gap-2 py-2 px-6 rounded-full font-bold text-lg transition-all duration-300 mb-6 shadow-sm
      ${isLowTime
        ? 'bg-red-500 text-white animate-pulse ring-4 ring-red-300'
        : 'bg-white text-[#2a4d4c] ring-2 ring-white/50'}`}>
      <span className="text-2xl">⏳</span>
      <span>Time Left: <span className="font-mono">{time}s</span></span>
    </div>
  )
}
