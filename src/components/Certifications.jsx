import { FiAward, FiCalendar } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {portfolioData.certifications.map((cert, i) => (
            <div
              key={i}
              className="card"
              style={{
                borderTop: cert.highlight
                  ? '3px solid var(--warning)'
                  : '3px solid var(--accent)',
                position: 'relative',
              }}
            >
              {/* AWS highlight badge */}
              {cert.highlight && (
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: '#f59e0b',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  ⭐ Featured
                </span>
              )}

              {/* Icon */}
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: cert.highlight
                  ? 'rgba(245, 158, 11, 0.15)'
                  : 'var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <FiAward style={{
                  fontSize: '1.3rem',
                  color: cert.highlight ? '#f59e0b' : 'var(--accent)',
                }} />
              </div>

              {/* Name */}
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '6px',
                paddingRight: cert.highlight ? '80px' : '0',
              }}>
                {cert.name}
              </h3>

              {/* Issuer + Date */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '12px',
              }}>
                <span style={{
                  color: cert.highlight ? '#f59e0b' : 'var(--accent)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}>
                  {cert.issuer}
                </span>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                }}>
                  <FiCalendar style={{ fontSize: '0.75rem' }} />
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications