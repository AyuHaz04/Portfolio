import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

function NavLink({ href, children, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color: hovered ? 'var(--accent)' : 'var(--text-muted)',
        fontSize: '0.9rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

function IconLink({ href, children }) {
  const [hovered, setHovered] = useState(false)
  return (
  <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        color: hovered ? 'var(--accent)' : 'var(--text-muted)',
        fontSize: '1.2rem',
        textDecoration: 'none',
        transition: 'color 0.2s',
        display: 'flex',
        alignItems: 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Experience', 'Projects', 'Skills', 'Certifications', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 0',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#hero"
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
          }}
        >
          {portfolioData.name}
        </a>

        <ul
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {links.map(link => (
            <li key={link}>
              <NavLink href={`#${link.toLowerCase()}`}>{link}</NavLink>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <IconLink href={portfolioData.github}>
            <FiGithub />
          </IconLink>
          <IconLink href={portfolioData.linkedin}>
            <FiLinkedin />
          </IconLink>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.3rem',
              cursor: 'pointer',
              display: 'none',
              padding: 0,
            }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            background: 'var(--surface)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px',
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {links.map(link => (
              <li key={link}>
                <NavLink href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar