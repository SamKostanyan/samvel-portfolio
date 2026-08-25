import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <p className="font-mono-tag text-xs">Yerevan, Armenia</p>
      </div>
    </footer>
  )
}
