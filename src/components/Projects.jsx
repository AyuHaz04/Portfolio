import { FiGithub, FiExternalLink } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

function ProjectCard({ project }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="card reveal" style={{ borderTop: '3px solid var(--accent)' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '16px',
      }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          {project.name}
        </h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={project.live} target="_blank" rel="noreferrer"
            className="btn btn-primary" style={{ padding: '7px 14px', fontSize: '0.82rem' }}>
            <FiExternalLink /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="btn btn-outline" style={{ padding: '7px 14px', fontSize: '0.82rem' }}>
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {project.tech.map((tech, j) => (
          <span key={j} className="badge">{tech}</span>
        ))}
      </div>
      <ul style={{ display: 'grid', gap: '10px', listStyle: 'none', margin: 0, padding: 0 }}>
        {project.points.map((point, j) => (
          <li key={j} style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            paddingLeft: '18px',
            position: 'relative',
            lineHeight: 1.6,
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '0.6em',
              width: '6px',
              height: '6px',
              borderRadius: '999px',
              background: 'var(--accent)',
            }} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div style={{ display: 'grid', gap: '24px' }}>
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects