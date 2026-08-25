import { motion } from 'framer-motion'
import { FiArrowUpRight, FiSmartphone, FiGlobe } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="card grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-2 lg:gap-12"
    >
      <div className={`flex flex-col justify-center ${isEven ? '' : 'lg:order-2'}`}>
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.accent}`}
            aria-hidden
          />
          <span className="font-mono-tag text-xs uppercase tracking-widest text-slate-400">
            Featured project
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-2 text-sm font-medium text-accent-600 dark:text-accent-400">
          {project.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <FiGlobe size={13} /> Web
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.web.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <FiSmartphone size={13} /> Mobile
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.mobile.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.links?.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white
                transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
            >
              View on the App Store
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.links?.web && (
            <a
              href={project.links.web}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold
                text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50
                dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
            >
              Visit website
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>

      <div className={`relative flex items-center justify-center ${isEven ? '' : 'lg:order-1'}`}>
        <PhoneMockup accent={project.accent} name={project.name} blurb={project.blurb || project.tagline} />
      </div>
    </motion.article>
  )
}

function PhoneMockup({ accent, name, blurb }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative"
    >
      <div className="animate-float relative h-[360px] w-[190px] rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl dark:border-slate-700">
        <div className={`h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${accent} relative`}>
          <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900/80" />
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-white">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl font-bold backdrop-blur-sm">
              {name
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 2)}
            </div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-[11px] leading-snug text-white/80">{blurb}</p>
          </div>
        </div>
      </div>
      <div
        className={`absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-3xl`}
        aria-hidden
      />
    </motion.div>
  )
}
