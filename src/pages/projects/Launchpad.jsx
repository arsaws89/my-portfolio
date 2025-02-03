import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import launchpadHero from '../../assets/launchpadhero.jpg'

const LaunchpadProject = () => {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
      </nav>

      <div className="project-hero">
        <div className="project-intro">
          <h1>Spring Studios Launchpad Batch 02</h1>
          <h2>Brand Strategy • Visual Identity • Art Direction</h2>
          <p className="project-description">
            A comprehensive branding project for Launchpad, a startup accelerator program.
          </p>
        </div>
        <img 
          src={launchpadHero}
          alt="Spring Studios Launchpad Batch 02" 
          className="hero-image"
        />
      </div>

      <div className="project-content">
        <section className="project-section">
          <h3>The Challenge</h3>
          <p>Project details here...</p>
        </section>

        <section className="project-section">
          <h3>The Solution</h3>
          <p>Solution details here...</p>
        </section>

        <section className="project-section">
          <h3>The Result</h3>
          <p>Results and outcomes...</p>
        </section>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/opensponsor')} className="next-project">
          Next Project: OpenSponsor →
        </button>
      </div>
    </div>
  )
}

export default LaunchpadProject 