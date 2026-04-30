import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

function Experience() {
  const ref = useReveal()
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {portfolioData.experience.map((job, i) => (
            <div
              key={i}
              ref={ref}
              className="card reveal"
              style={{ borderLeft: '3px solid var(--accent)', borderRadius: '0 16px 16px 0' }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px',
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '6px',
                  }}>
                    <FiBriefcase style={{ color: 'var(--accent)', fontSize: '1.1rem' }} />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {job.role}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>
                    {job.company}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  background: 'var(--surface2)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: '1px solid var(--border)',
                }}>
                  <FiCalendar style={{ fontSize: '0.8rem' }} />
                  {job.duration}
                </div>
              </div>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}>
                {job.points.map((point, j) => (
                  <li key={j} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}>
                    <FiCheckCircle style={{
                      color: 'var(--accent)',
                      fontSize: '1rem',
                      marginTop: '3px',
                      flexShrink: 0,
                    }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience