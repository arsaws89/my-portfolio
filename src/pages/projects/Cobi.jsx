import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import frame1 from '../../assets/cobi/1.jpg'
import frame2 from '../../assets/cobi/2.jpg'
import frame3 from '../../assets/cobi/3.jpg'
import frame4 from '../../assets/cobi/4.jpg'
import cobi1 from '../../assets/cobi/cobi1.jpg'
import cobi2 from '../../assets/cobi/cobi2.jpg'
import cobi3 from '../../assets/cobi/cobi3.jpg'

const CobiProject = () => {
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
          <h1>Cobi</h1>
          <h2>UI/UX • Mobile App • Brand Identity</h2>
          <p className="project-description">
            <strong>Problem:</strong> Banks and customers face shared challenges, including the need for personalized, flexible products and services, better customer understanding, and faster innovation.
          </p>
          <p className="project-description">
            <strong>Solution:</strong> An AI powered analytics platform for financial institutions to execute & design digital banking strategies
          </p>
          <p className="project-description">
            <strong>My Role:</strong> Created a sleek and innovative brand, a landing page & a seamless dashboard visualizing complex financial insights, and optimizing AI-driven decision-making tools
          </p>
          <a 
            href="https://hellocobi.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Website →
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img src={frame1} alt="Cobi Frame 1" />
          <img src={frame2} alt="Cobi Frame 2" />
          <img src={frame4} alt="Cobi Frame 4" />
          <img src={cobi1} alt="Cobi Additional 1" />
          <img src={cobi2} alt="Cobi Additional 2" />
          <img src={cobi3} alt="Cobi Additional 3" />
          <img src={frame3} alt="Cobi Frame 3" />
        </div>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/talmena')} className="next-project">
          Next Project: Talmena →
        </button>
      </div>
    </div>
  )
}

export default CobiProject