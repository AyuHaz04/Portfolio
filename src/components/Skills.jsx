import portfolioData from '../data/portfolioData'


const categoryColors = {
  'Languages': '#f59e0b',
  'Data & ML': '#ec4899',
  'Frontend': '#6366f1',
  'Backend': '#10b981',
  'Databases': '#3b82f6',
  'Tools & Cloud': '#8b5cf6',
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {portfolioData.skills.map((group, i) => {
            const color = categoryColors[group.category] || 'var(--accent)'
            return (
              <div
                key={i}
                className="card"
                style={{ borderTop: `3px solid ${color}` }}
              >
                {/* Category Title */}
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: color,
                  marginBottom: '16px',
                }}>
                  {group.category}
                </h3>

                {/* Skill Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: color,
                        background: `${color}18`,
                        border: `1px solid ${color}40`,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills