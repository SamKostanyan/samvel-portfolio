import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiTelegram } from 'react-icons/si'
import BackgroundBlobs from './BackgroundBlobs.jsx'
import { profile } from '../data/content.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <BackgroundBlobs />

      <div className="section-container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm
              dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for full-time &amp; freelance work
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&rsquo;m {profile.name.split(' ')[0]} —
            <br />
            <span className="text-gradient">{profile.title}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white
                shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-0.5
                dark:bg-white dark:text-slate-900"
            >
              View my work
              <FiArrowDown className="transition-transform group-hover:translate-y-0.5" size={16} />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumeUrl}`}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold
                text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50
                dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
            >
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { href: profile.social.github, icon: FiGithub, label: 'GitHub' },
              { href: profile.social.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
              { href: profile.social.telegram, icon: SiTelegram, label: 'Telegram' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500
                  transition-colors hover:border-accent-400 hover:text-accent-600
                  dark:border-white/10 dark:text-slate-400 dark:hover:text-accent-400"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-400 sm:flex"
      >
        <span className="font-mono-tag uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-300 p-1 dark:border-white/20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        </motion.span>
      </motion.div>
    </section>
  )
}
