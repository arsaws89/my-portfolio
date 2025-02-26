import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import frame1 from '../../assets/Talmena/MOCKUP2.jpg'
import frame2 from '../../assets/Talmena/talmenaweb.jpg'
import frame3 from '../../assets/Talmena/talmenaweb2.jpg'
import frame4 from '../../assets/Talmena/talmenaweb3.jpg'
import frame5 from '../../assets/Talmena/talmenaweb4.jpg'

const TalmenaProject = () => {
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
          <h1>Talmena</h1>
          <h2>UI/UX • Mobile App • Brand Identity</h2>
          <p className="project-description">
            Designed an intuitive and seamless job application experience for candidates using a talent acquisition platform. The goal is to improve usability, reduce drop-offs, and ensure a smooth interaction from job discovery to application submission.
          </p>
          <p className="project-description" style={{fontStyle: 'italic'}}>
            Work done at <a href="https://www.springstudios.io" target="_blank" rel="noopener noreferrer">Spring Studios</a>
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img src={frame1} alt="Talmena Cover" />
          <img src={frame2} alt="Talmena Web" />
          <img src={frame3} alt="Talmena Design Process" />
          <img src={frame4} alt="Talmena Interface" />
          <img src={frame5} alt="Talmena Features" />
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

export default TalmenaProject 