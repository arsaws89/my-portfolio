import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import frame1 from '../../assets/launchpadhero.jpg'

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
          <h2>Branding • Landing Page</h2>
          <p className="project-description">
            Crafted a bold and modern design for our venture studio's Launchpad program, blending sleek visuals with intuitive functionality. This project captures the spirit of innovation and entrepreneurship. Check it out! 👇
          </p>
          <p className="project-description studio-tag">
            Work done at <a href="https://www.springstudios.io" target="_blank" rel="noopener noreferrer">Spring Studios</a>
          </p>
          <a 
            href="https://www.springstudios.io/launchpad" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="website-link"
          >
            Website
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img src={frame1} alt="Launchpad Hero" />
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