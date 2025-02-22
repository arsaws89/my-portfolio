import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import frame1 from '../../assets/Founderrise/FR2.jpg'
import frame2 from '../../assets/Founderrise/FR3.jpg'
import frame3 from '../../assets/founderise.jpg'

const FounderiseProject = () => {
  const navigate = useNavigate()

  return (
    <div className="project-page" data-project="founderise">
      <nav className="project-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
      </nav>

      <div className="project-hero">
        <div className="project-intro">
          <h1>Founderise</h1>
          <h2>UI/UX • Web Platform • Brand Identity</h2>
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
          <img src={frame3} alt="Founderise Final Design" />
          <img src={frame1} alt="Founderise Cover" />
          <img src={frame2} alt="Founderise Design Process" />
        </div>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/skiplino')} className="next-project">
          Next Project: Skiplino →
        </button>
      </div>
    </div>
  )
}

export default FounderiseProject 