import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { SiTelegram } from 'react-icons/si'
import SectionHeading from './SectionHeading.jsx'
import BackgroundBlobs from './BackgroundBlobs.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null)

  const copyToClipboard = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(field)
      setTimeout(() => setCopiedField((current) => (current === field ? null : current)), 2000)
    } catch (e) {
      // clipboard API unavailable — the mailto/tel links below still work
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <BackgroundBlobs />
      <div className="section-container relative z-10">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to full-time roles and freelance projects — web, mobile, or both. Reach out and I'll get back to you shortly."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card mx-auto flex max-w-xl flex-col items-center gap-6 p-8 text-center"
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <button
              type="button"
              onClick={() => copyToClipboard(profile.email, 'email')}
              className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium
                text-slate-700 transition-colors hover:border-accent-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              <FiMail className="text-accent-500" />
              {profile.email}
              {copiedField === 'email' ? (
                <FiCheck className="text-emerald-500" />
              ) : (
                <FiCopy className="text-slate-400 transition-colors group-hover:text-accent-500" />
              )}
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(profile.phone, 'phone')}
              className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium
                text-slate-700 transition-colors hover:border-accent-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              <FiPhone className="text-accent-500" />
              {profile.phone}
              {copiedField === 'phone' ? (
                <FiCheck className="text-emerald-500" />
              ) : (
                <FiCopy className="text-slate-400 transition-colors group-hover:text-accent-500" />
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white
                shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-0.5
                dark:bg-white dark:text-slate-900"
            >
              Say hello
              <FiSend size={15} />
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold
                text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50
                dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
            >
              Call me
              <FiPhone size={15} />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500
                transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-white/10 dark:text-slate-400"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500
                transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-white/10 dark:text-slate-400"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href={profile.social.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500
                transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-white/10 dark:text-slate-400"
            >
              <SiTelegram size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
