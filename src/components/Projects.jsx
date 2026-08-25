import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've shipped end to end"
          description="Products where I owned the backend API, the web frontend, and the mobile app — not just one layer of the stack."
        />

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          More case studies coming soon — this list grows as new projects ship.
        </p>
      </div>
    </section>
  )
}
