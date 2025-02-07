import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import Walaa1 from '../../assets/Walaa1.jpg'
import Walaa2 from '../../assets/Walaa2.jpg'

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
          <h2>Branding • Web Design</h2>
          <p className="project-description">
            A comprehensive brand identity and web design project for Walaa, a VIP membership club. The design focuses on creating a modern, trustworthy, and user-friendly digital presence.
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img 
            src={Walaa1} 
            alt="Walaa Interface 1" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img 
            src={Walaa2} 
            alt="Walaa Interface 2" 
            onError={(e) => {
              console.error('Failed to load image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
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