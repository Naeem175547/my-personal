import { motion } from 'framer-motion'

export default function QuestionCard({question, options, onSelect}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-8 rounded-[30px] shadow-2xl w-full max-w-2xl mx-auto border-b-8 border-gray-100"
    >
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#2a4d4c] leading-tight text-center">
          {question}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {options.map((opt, i) => (
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#fffdf0" }}
            whileTap={{ scale: 0.98 }}
            key={i}
            onClick={() => onSelect(opt)}
            className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-[#ffd700] transition-all duration-200 font-medium text-gray-700 flex items-center gap-4 group shadow-sm"
          >
            <span className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#ffd700] flex items-center justify-center text-sm font-bold text-gray-500 group-hover:text-[#2a4d4c] transition-colors">
              {String.fromCharCode(65 + i)}
            </span>
            {opt}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
