import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'

const SaboonProject = () => {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
        <h1>Saboon</h1>
      </nav>

      <div className="project-hero">
        <div className="project-intro">
          <h2>UI/UX • E-commerce • Brand Identity</h2>
          <p className="project-description">
            Project description here...
          </p>
        </div>
        <img 
          src="/path/to/hero-image.jpg" 
          alt="Saboon Project Hero" 
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
        <button onClick={() => navigate('/projects/founderise')} className="next-project">
          Next Project: Founderise →
        </button>
      </div>
    </div>
  )
}

export default SaboonProject 