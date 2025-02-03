import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import frame1 from '../../assets/Frame 1.jpg'
import frame2 from '../../assets/Frame 2.jpg'
import frame3 from '../../assets/Frame 3.jpg'
import frame4 from '../../assets/Frame 4.jpg'
import frame5 from '../../assets/Frame 5.jpg'
import frame6 from '../../assets/Frame 6.jpg'

const OpenSponsorProject = () => {
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
          <h1>OpenSponsor</h1>
          <h2>Branding • UI/UX</h2>
          <p className="project-description">
            <strong>Problem:</strong> Sponsorship is fragmented and notoriously difficult to quantify, manage, activate, and manage, meaning poor use of marketing budgets and missed opportunities.
          </p>
          <p className="project-description">
            <strong>Solution:</strong> An AI powered platform that leverages AI capabilities provided by OpenAI's API to enhance user experience and automate various tasks.
          </p>
          <p className="project-description">
            <strong>My Role:</strong> Designed a modern brand and a seamless and intelligent UI/UX for AI-powered platform that utilizes OpenAI's API to enhance user experience and automate tasks.
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img src={frame5} alt="OpenSponsor Frame 5" />
          <img src={frame6} alt="OpenSponsor Frame 6" />
          <img src={frame1} alt="OpenSponsor Frame 1" />
          <img src={frame2} alt="OpenSponsor Frame 2" />
          <img src={frame3} alt="OpenSponsor Frame 3" />
          <img src={frame4} alt="OpenSponsor Frame 4" />
        </div>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/credability')} className="next-project">
          Next Project: Credability →
        </button>
      </div>
    </div>
  )
}

export default OpenSponsorProject 