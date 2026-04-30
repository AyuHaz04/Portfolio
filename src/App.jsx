import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ position: 'relative' }}>

      {/* Third orb — middle of page */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '60%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'floatOrb1 18s ease-in-out infinite alternate',
      }} />

      <Navbar />
      <Hero />
      <Stats />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Leadership />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App