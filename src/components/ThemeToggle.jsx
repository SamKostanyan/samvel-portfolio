import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative flex h-9 w-16 items-center rounded-full border border-slate-200 bg-slate-100 px-1 transition-colors
        dark:border-white/10 dark:bg-white/5"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-accent-600 shadow-md
          dark:bg-[#151b2b] dark:text-accent-400"
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark ? <FiMoon size={15} /> : <FiSun size={15} />}
      </motion.span>
    </button>
  )
}
