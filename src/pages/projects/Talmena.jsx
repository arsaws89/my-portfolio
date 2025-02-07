import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import talmenaweb from '../../assets/talmenaweb.jpg'
import talmenaweb2 from '../../assets/talmenaweb2.jpg'
import talmenaweb3 from '../../assets/talmenaweb3.jpg'
import talmenaweb4 from '../../assets/talmenaweb4.jpg'

const TalmenaProject = () => {
  const navigate = useNavigate()

  console.log('Image imports:', {
    talmenaweb,
    talmenaweb2,
    talmenaweb3,
    talmenaweb4
  })

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
      </nav>

      <div className="project-hero">
        <div className="project-intro">
          <h1>Talmena</h1>
          <h2>Branding • UI/UX</h2>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img 
            src={talmenaweb3} 
            alt="Talmena Web Interface 3" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img 
            src={talmenaweb4} 
            alt="Talmena Web Interface 4" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img 
            src={talmenaweb} 
            alt="Talmena Web Cover" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img 
            src={talmenaweb2} 
            alt="Talmena Web Interface 2" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
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

export default TalmenaProject 