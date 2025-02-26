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
          <h2>Web Design • Branding</h2>
          <p className="project-description">
            A vibrant and modern design for an exclusive founders' VIP club. This colorful, friendly interface celebrates community and connection, creating a welcoming space for entrepreneurs.
          </p>
          <p className="project-description" style={{fontStyle: 'italic'}}>
            Work done at <a href="https://www.springstudios.io" target="_blank" rel="noopener noreferrer">Spring Studios</a>
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