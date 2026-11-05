import { m } from 'framer-motion'
import { ExternalLink } from '../components/ExternalLink'
import { ArrowUpRight, Github } from '../components/icons'
import { SignHeading } from '../components/SignHeading'
import { projects, type Project } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'

/** Each project hangs as its own enamel sign; colours rotate along the wall. */
const PANELS = [
  { panel: 'bg-blue text-enamel', accent: 'text-yellow', tag: 'bg-enamel/15 text-enamel', link: 'btn-yellow' },
  { panel: 'bg-red text-enamel', accent: 'text-enamel', tag: 'bg-ink/20 text-enamel', link: 'btn-yellow' },
  { panel: 'bg-yellow text-ink [--shade:var(--red)]', accent: 'text-red-deep', tag: 'bg-ink/10 text-ink', link: 'btn-red' },
  { panel: 'bg-enamel text-ink [--shade:var(--yellow)]', accent: 'text-blue', tag: 'bg-ink/8 text-ink', link: 'btn-red' },
] as const

const regular = projects.filter((p) => !p.featured)
const lastRegularId = regular.at(-1)?.id

/** Featured signs span the row; a lone last sign on the 2-column (tablet) grid spans both columns. */
function spanClass(p: Project) {
  if (p.featured) return 'md:col-span-2 lg:col-span-3'
  if (regular.length % 2 === 1 && p.id === lastRegularId) return 'md:col-span-2 lg:col-span-1'
  return ''
}

function ProjectSign({ project, index }: { project: Project; index: number }) {
  const { t, l } = useLanguage()
  const tone = PANELS[index % PANELS.length]
  const featured = project.featured

  return (
    <div className={`relative pt-10 ${spanClass(project)}`}>
      {/* A short wall bracket with two hanging wires */}
      <span aria-hidden className="absolute inset-x-[12%] top-0 h-[5px] rounded-full bg-ink/75 dark:bg-on-wall-soft" />
      <span aria-hidden className="absolute top-0 left-[18%] h-11 w-[3px] -translate-x-1/2 bg-ink/70 dark:bg-on-wall-soft" />
      <span aria-hidden className="absolute top-0 right-[18%] h-11 w-[3px] translate-x-1/2 bg-ink/70 dark:bg-on-wall-soft" />

      {/* Signature interaction: the sign swings on its wires when hovered */}
      <m.article
        initial={{ rotate: index % 2 ? 1.6 : -1.6 }}
        whileInView={{ rotate: 0 }}
        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
        whileHover={{ rotate: index % 2 ? -1.4 : 1.4 }}
        transition={{ type: 'spring', stiffness: 140, damping: 7, mass: 0.9 }}
        style={{ transformOrigin: '50% 0%' }}
        className={`sign flex h-full flex-col p-5 sm:p-7 ${tone.panel} ${featured ? 'lg:grid lg:grid-cols-12 lg:gap-10 lg:p-10' : ''}`}
      >
        <figure className={`relative overflow-hidden rounded-[3px] border-[3px] border-ink bg-ink ${featured ? 'lg:col-span-7' : ''}`}>
          <img
            src={project.image}
            alt={l(project.imageAlt)}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
          <figcaption className="plaque absolute right-2 bottom-2 rounded-[2px] bg-ink/85 px-2 py-1 text-xs text-enamel">
            {t.projects.illustration}
          </figcaption>
        </figure>

        <div className={`flex flex-1 flex-col pt-6 ${featured ? 'lg:col-span-5 lg:justify-center lg:pt-0' : ''}`}>
          <p className={`text-sm font-medium text-pretty ${tone.accent}`}>
            {l(project.kind)} · <span className="tabular-nums">{project.year}</span>
          </p>
          <h3 className={`letter mt-2 ${featured ? 'text-[clamp(2.75rem,6vw,4.5rem)]' : 'text-[2.75rem]'}`}>{project.title}</h3>
          <p className="mt-4 text-pretty">{l(project.description)}</p>
          <p className="mt-3 text-sm">
            <span>{t.projects.role}: </span>
            <span className="font-medium">{l(project.role)}</span>
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={t.projects.stack}>
            {project.tags.map((tag) => (
              <li key={tag} className={`rounded-[2px] px-2 py-1 text-xs font-medium ${tone.tag}`}>
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
            {project.demoUrl && (
              <ExternalLink href={project.demoUrl} className={`btn ${tone.link} !px-3.5 !py-2.5 !text-xs`}>
                {t.projects.demo}
                <ArrowUpRight width={15} height={15} />
                <span className="sr-only">: {project.title}</span>
              </ExternalLink>
            )}
            {project.repoUrl ? (
              <ExternalLink href={project.repoUrl} className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline">
                <Github width={16} height={16} />
                {t.projects.code}
                <span className="sr-only">: {project.title}</span>
              </ExternalLink>
            ) : (
              <span className="text-sm">{t.projects.private}</span>
            )}
          </div>
        </div>
      </m.article>
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 md:py-28">
      <SignHeading id="projects" heading={t.projects.heading} sub={t.projects.sub} tone="yellow" />
      <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        {projects.map((p, i) => (
          <ProjectSign key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
