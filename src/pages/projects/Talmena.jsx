import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'

const TalmenaProject = () => {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <nav className="project-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
        <h1>Talmena</h1>
      </nav>

      <div className="project-hero">
        <div className="project-intro">
          <h2>UI/UX • Mobile App • Brand Identity</h2>
          <p className="project-description">
            Project description here...
          </p>
        </div>
        <img 
          src="/path/to/hero-image.jpg" 
          alt="Talmena Project Hero" 
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
        <button onClick={() => navigate('/projects/skiplino')} className="next-project">
          Next Project: Skiplino →
        </button>
      </div>
    </div>
  )
}

export default TalmenaProject 