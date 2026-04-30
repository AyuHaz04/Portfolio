import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          {/* Glow card */}
          <div className="card" style={{
            padding: '48px 40px',
            borderTop: '3px solid var(--accent)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--accent-glow)',
              border: '2px solid var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <FiMail style={{ fontSize: '1.5rem', color: 'var(--accent)' }} />
            </div>

            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}>
              Open to Opportunities
            </h3>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              I'm actively looking for full-stack developer roles and
              internship opportunities. Feel free to reach out — I'd
              love to connect!
            </p>

            {/* Email button */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                marginBottom: '24px',
                fontSize: '1rem',
                padding: '12px 28px',
              }}
            >
              <FiMail /> {portfolioData.email}
            </a>

            {/* Social links */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '8px',
            }}>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <FiGithub /> GitHub
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact