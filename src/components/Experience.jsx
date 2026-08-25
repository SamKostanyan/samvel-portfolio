import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          description="Years spent turning product requirements into shipped APIs, interfaces, and mobile apps."
        />

        <div className="relative border-l border-slate-200 pl-8 dark:border-white/10">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-accent-300 bg-white text-accent-600 shadow-sm dark:border-accent-500/40 dark:bg-[#0b0f1a] dark:text-accent-400">
                <FiBriefcase size={15} />
              </span>

              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="font-mono-tag rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-600 dark:text-accent-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent-600 dark:hover:text-accent-400"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  {job.location ? ` · ${job.location}` : ''}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
