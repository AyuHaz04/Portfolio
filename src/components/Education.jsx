import { FiBook, FiCalendar } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '21px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--border)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {portfolioData.education.map((edu, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px' }}>

                {/* Timeline dot */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--surface)',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 1,
                }}>
                  <FiBook style={{ color: 'var(--accent)', fontSize: '1rem' }} />
                </div>

                {/* Content */}
                <div className="card" style={{ flex: 1, marginBottom: 0 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}>
                      {edu.degree}
                    </h3>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--text-muted)',
                      fontSize: '0.82rem',
                      background: 'var(--surface2)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid var(--border)',
                    }}>
                      <FiCalendar style={{ fontSize: '0.75rem' }} />
                      {edu.duration}
                    </span>
                  </div>

                  <p style={{
                    color: 'var(--accent)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    marginBottom: '8px',
                  }}>
                    {edu.institution}
                  </p>

                  <span style={{
                    display: 'inline-block',
                    padding: '3px 12px',
                    borderRadius: '20px',
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: 'var(--accent-hover)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education