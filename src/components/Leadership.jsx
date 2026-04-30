import { FiUsers, FiCalendar } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

function Leadership() {
  return (
    <section id="leadership">
      <div className="container">
        <h2 className="section-title">Leadership</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {portfolioData.leadership.map((item, i) => (
            <div
              key={i}
              className="card"
              style={{ borderLeft: '3px solid var(--accent)' }}
            >
              {/* Icon */}
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <FiUsers style={{
                  fontSize: '1.3rem',
                  color: 'var(--accent)',
                }} />
              </div>

              {/* Role */}
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}>
                {item.role}
              </h3>

              {/* Event */}
              <p style={{
                color: 'var(--accent)',
                fontWeight: 600,
                fontSize: '0.9rem',
                marginBottom: '12px',
              }}>
                {item.event}
              </p>

              {/* Description */}
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginBottom: '16px',
              }}>
                {item.description}
              </p>

              {/* Date */}
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
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership