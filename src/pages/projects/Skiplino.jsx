import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import coverSkiplino from '../../assets/coverskiplino.png'
import skiplino1 from '../../assets/skiplino1.png'
import skiplino2 from '../../assets/skiplino2.png'
import skiplino3 from '../../assets/skiplino3.png'
import skiplino4 from '../../assets/skiplino4.png'
import skiplino5 from '../../assets/skiplino5.png'

const SkiplinoProject = () => {
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
          <h1>Skiplino</h1>
          <h2>UI/UX • Web App • Brand Identity</h2>
          <p className="project-description">
            <strong>Problem:</strong> Queue management systems often lack user-friendly interfaces and comprehensive analytics, leading to inefficient service delivery and poor customer experience.
          </p>
          <p className="project-description">
            <strong>Solution:</strong> A cloud-based queue management system that streamlines customer flow, provides real-time analytics, and enhances service efficiency.
          </p>
          <p className="project-description">
            <strong>My Role:</strong> Designed a seamless booking experience along with a home screen that guides the user's attention without overwhelming them through an intuitive user interface
          </p>
          <a 
            href="https://www.skiplino.com" 
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
          <img src={coverSkiplino} alt="Skiplino Cover" />
          <img src={skiplino2} alt="Skiplino Interface 2" />
          <img src={skiplino1} alt="Skiplino Interface 1" />
          <img src={skiplino3} alt="Skiplino Interface 3" />
          <img src={skiplino4} alt="Skiplino Interface 4" />
          <img src={skiplino5} alt="Skiplino Interface 5" />
        </div>
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/projects/walaa')} className="next-project">
          Next Project: Walaa →
        </button>
      </div>
    </div>
  )
}

export default SkiplinoProject 