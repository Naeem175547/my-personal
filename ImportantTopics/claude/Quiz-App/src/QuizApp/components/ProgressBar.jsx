import { motion } from 'framer-motion'

export default function ProgressBar({ current, total}) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full bg-white/30 rounded-full h-4 mb-6 overflow-hidden shadow-inner">
      <motion.div
        className="bg-[#ffd700] h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ width: `${progress}%` }}
      >
        <span className="text-[10px] text-[#2a4d4c] font-bold text-center block">
          {Math.round(progress)}%
        </span>
      </motion.div>
    </div>
  )
}
