import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
      marginTop: '40px',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        {/* Left */}
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          Designed and built by{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            {portfolioData.name}
          </span>
          © 2025
        </p>

        {/* Right */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <FiGithub />
          </a>

          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer