import { ExternalLink } from '../components/ExternalLink'
import { ArrowUpRight, Github } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects, type Project } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, l } = useLanguage()
  const featured = project.featured

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-[border-color,box-shadow] duration-300 hover:border-ink-soft hover:shadow-[0_30px_60px_-30px_rgb(0_0_0/0.25)] ${
        featured ? 'md:grid md:grid-cols-12' : ''
      }`}
    >
      <div className={`relative overflow-hidden bg-paper-2 ${featured ? 'md:col-span-7' : ''}`}>
        <img
          src={project.image}
          alt={l(project.imageAlt)}
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? 'md:col-span-5 md:justify-center md:p-10' : ''}`}>
        <p className="eyebrow flex flex-wrap justify-between gap-x-4 gap-y-1">
          <span>{l(project.kind)}</span>
          <span>
            {String(index + 1).padStart(2, '0')} · {project.year}
          </span>
        </p>
        <h3 className={`display mt-3 ${featured ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{project.title}</h3>
        <p className="mt-4 text-pretty text-ink-soft">{l(project.description)}</p>
        <p className="mt-4 text-sm">
          <span className="text-ink-soft">{t.projects.role}: </span>
          {l(project.role)}
        </p>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={t.projects.stack}>
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-paper-2 px-2.5 py-1 font-mono text-xs text-ink-soft">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-5 pt-8 text-sm font-medium">
          {project.demoUrl && (
            <ExternalLink href={project.demoUrl} className="inline-flex items-center gap-1.5 text-accent-ink hover:underline">
              {t.projects.demo}
              <ArrowUpRight width={16} height={16} />
              <span className="sr-only">— {project.title}</span>
            </ExternalLink>
          )}
          {project.repoUrl ? (
            <ExternalLink href={project.repoUrl} className="inline-flex items-center gap-1.5 hover:underline">
              <Github width={16} height={16} />
              {t.projects.code}
              <span className="sr-only">— {project.title}</span>
            </ExternalLink>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-ink-soft">{t.projects.private}</span>
          )}
        </div>
      </div>
    </article>
  )
}

const regular = projects.filter((p) => !p.featured)
const lastRegularId = regular.at(-1)?.id

/** Featured cards span the full row; a lone last card on the 2-col (tablet) grid spans both columns. */
function spanClass(p: Project) {
  if (p.featured) return 'md:col-span-2 lg:col-span-3'
  if (regular.length % 2 === 1 && p.id === lastRegularId) return 'md:col-span-2 lg:col-span-1'
  return ''
}

export function Projects() {
  const { t } = useLanguage()
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading id="projects" eyebrow={t.projects.eyebrow} heading={t.projects.heading} sub={t.projects.sub} />
      <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.08} className={spanClass(p)}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
