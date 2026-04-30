import portfolioData from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

function StatCard({ stat, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="card reveal"
      style={{
        textAlign: 'center',
        padding: '32px 24px',
        borderTop: '3px solid var(--accent)',
        animationDelay: `${delay}s`,
      }}
    >
      <div style={{
        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
        fontWeight: 800,
        background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '8px',
      }}>
        {stat.value}
      </div>
      <div style={{
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        fontWeight: 500,
      }}>
        {stat.label}
      </div>
    </div>
  )
}

function Stats() {
  return (
    <section style={{ padding: '0 0 80px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="stats-grid">
          {portfolioData.stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Stats