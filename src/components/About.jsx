import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import StatCard from './StatCard.jsx'
import { profile, education } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About me"
          title="A full stack developer who ships end to end"
          description="From API design to pixel-level polish on the frontend and mobile app — I like owning a feature from database to device."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Day to day that means designing RESTful APIs and data models with Laravel and
              MySQL, building responsive interfaces in Vue.js and React.js, and extending the
              same product to iOS and Android with React Native — including auth, payments,
              real-time features, and push notifications.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-accent-500" /> {profile.location}
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 hover:text-accent-600 dark:hover:text-accent-400"
              >
                <FiMail className="text-accent-500" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 hover:text-accent-600 dark:hover:text-accent-400"
              >
                <FiPhone className="text-accent-500" /> {profile.phone}
              </a>
            </div>

            {education.length > 0 && (
              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Education
                </h3>
                {education.map((ed) => (
                  <p key={ed.school} className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-slate-900 dark:text-white">{ed.school}</span>
                    {' — '}
                    {ed.location}
                    {ed.detail ? ` · ${ed.detail}` : ''}
                  </p>
                ))}
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-2 gap-4 self-start lg:col-span-2">
            <StatCard value={6} suffix="+" label="Years of experience" delay={0} />
            <StatCard value={2} label="Platforms shipped: web & mobile" delay={0.1} />
            <StatCard value={10} suffix="+" label="Technologies in daily use" delay={0.2} />
            <StatCard value={1} label="Backend, one API for every client" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  )
}
