import { motion } from 'framer-motion'
import {
  SiVuedotjs,
  SiReact,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiGit,
  SiHtml5,
  SiJquery,
  SiClaude,
} from 'react-icons/si'
import { TbApi, TbCode } from 'react-icons/tb'
import SectionHeading from './SectionHeading.jsx'
import { skills, languages } from '../data/content.js'

const ICONS = {
  'Vue.js': { icon: SiVuedotjs, color: '#42b883' },
  'React.js': { icon: SiReact, color: '#61dafb' },
  'React Native': { icon: SiReact, color: '#61dafb' },
  'PHP / Laravel': { icon: SiLaravel, color: '#ff2d20' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  'RESTful APIs': { icon: TbApi, color: '#337dff' },
  MySQL: { icon: SiMysql, color: '#4479a1' },
  'Git / GitHub': { icon: SiGit, color: '#f05032' },
  'HTML / CSS': { icon: SiHtml5, color: '#e34f26' },
  jQuery: { icon: SiJquery, color: '#0769ad' },
  'Claude Code': { icon: SiClaude, color: '#d97757' },
  'Cursor AI': { icon: TbCode, color: '#6e6e6e' },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for every day"
          description="A pragmatic, full stack toolkit spanning frontend, backend, mobile, and the database layer that ties it together."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((skill) => {
            const meta = ICONS[skill.name] || { icon: TbCode, color: '#337dff' }
            const Icon = meta.icon
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -6 }}
                className="card group flex flex-col items-center gap-3 px-4 py-6 text-center transition-shadow hover:shadow-lg"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:bg-white/5"
                  style={{ color: meta.color }}
                >
                  <Icon size={24} />
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>
                <span className="font-mono-tag text-[10px] uppercase tracking-wider text-slate-400">
                  {skill.category}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Languages
          </span>
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600
                dark:border-white/10 dark:text-slate-300"
            >
              {lang.name} · {lang.level}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
