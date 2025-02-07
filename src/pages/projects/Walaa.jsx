import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'

const WalaaProject = () => {
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
          <h1>Walaa</h1>
          <h2>UI/UX • Web App • Brand Identity</h2>
          <p className="project-description">
            <strong>Problem:</strong> [Problem statement here]
          </p>
          <p className="project-description">
            <strong>Solution:</strong> [Solution description here]
          </p>
          <p className="project-description">
            <strong>My Role:</strong> [Role description here]
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          {/* Add Walaa project images here */}
        </div>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/founderise')} className="next-project">
          Next Project: Founderise →
        </button>
      </div>
    </div>
  )
}

export default WalaaProject 