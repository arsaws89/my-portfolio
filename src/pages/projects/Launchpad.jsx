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
          <h2>Branding • Web Design</h2>
          <a 
            href="https://www.springstudios.io/launchpad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Website →
          </a>
        </div>
        <img 
          src={launchpadHero}
          alt="Spring Studios Launchpad Batch 02" 
          className="hero-image"
        />
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          {/* Add your project images here */}
        </div>
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