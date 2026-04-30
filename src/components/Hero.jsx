import { FiGithub, FiLinkedin, FiFileText, FiArrowDown } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '720px' }}>

          {/* Greeting */}
          <p className="animate-fadeInUp" style={{
            color: 'var(--accent)',
            fontSize: '0.95rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            👋 Hey there, I'm
          </p>

          {/* Name */}
          <h1 className="animate-fadeInUp delay-1" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #e2e8f0 0%, #6366f1 50%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {portfolioData.name}
          </h1>

          {/* Title */}
          <h2 className="animate-fadeInUp delay-2" style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight: 500,
                color: 'var(--text-subtle)',
                marginBottom: '24px',
                }}>
                Full Stack Developer
                <span style={{ color: 'var(--border)', margin: '0 12px' }}>|</span>
                Data Analyst
                <span style={{ color: 'var(--border)', margin: '0 12px' }}>|</span>
                AWS Certified
          </h2>

          {/* Tagline */}
          <p className="animate-fadeInUp delay-3" style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            marginBottom: '40px',
            lineHeight: 1.8,
          }}>
            Building scalable web apps and data-driven solutions with{' '}
            <span style={{ color: 'var(--accent-hover)' }}>React, Node.js, Python & AWS</span>
            {' '}— delivering{' '}
            <span style={{ color: 'var(--accent-hover)' }}>40% faster load times</span>
            {' '}and{' '}
            <span style={{ color: 'var(--accent-hover)' }}>R² scores of 0.92</span>.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fadeInUp delay-4" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '64px',
          }}>
            <a href="/resume.pdf" target="_blank" className="btn btn-primary">
              <FiFileText /> View Resume
            </a>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FiGithub /> GitHub
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FiLinkedin /> LinkedIn
            </a>
          </div>

          {/* Scroll hint */}
          <div className="animate-fadeInUp delay-5" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}>
            <FiArrowDown style={{ animation: 'bounce 2s infinite' }} />
            Scroll to explore
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}

export default Hero