import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import FR1 from '../../assets/FR1.jpg'
import FR2 from '../../assets/FR2.jpg'
import FR3 from '../../assets/FR3.jpg'

const FounderiseProject = () => {
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
          <h1>Founderise</h1>
          <h2>UI/UX • Web App • Brand Identity</h2>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img 
            src={FR1} 
            alt="Founderise Interface 1" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img 
            src={FR2} 
            alt="Founderise Interface 2" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img 
            src={FR3} 
            alt="Founderise Interface 3" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/launchpad')} className="next-project">
          Next Project: Launchpad →
        </button>
      </div>
    </div>
  )
}

export default FounderiseProject 