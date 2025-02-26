import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import frame1 from '../../assets/credability/1.jpg'
import frame2 from '../../assets/credability/2.jpg'
import frame3 from '../../assets/credability/3.jpg'
import frame4 from '../../assets/credability/4.jpg'

const CredabilityProject = () => {
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
          <h1>Credability</h1>
          <h2>UI/UX • Web Design • Brand Identity</h2>
          <p className="project-description">
            Designed a minimal and futuristic brand & interface for a next-gen lending platform. The clean aesthetic and intuitive layout reflect innovation and trust, creating a seamless experience for users. Explore the future of financial solutions!
          </p>
          <p className="project-description studio-tag">
            Work done at <a href="https://www.springstudios.io" target="_blank" rel="noopener noreferrer">Spring Studios</a>
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img src={frame2} alt="Credability Frame 2" />
          <img src={frame1} alt="Credability Frame 1" />
          <img src={frame3} alt="Credability Frame 3" />
          <img src={frame4} alt="Credability Frame 4" />
        </div>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/cobi')} className="next-project">
          Next Project: Cobi →
        </button>
      </div>
    </div>
  )
}

export default CredabilityProject