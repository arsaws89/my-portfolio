import { useNavigate } from 'react-router-dom'
import '../../styles/ProjectPage.css'
import frame1 from '../../assets/Skiplino/coverskiplino.png'
import frame2 from '../../assets/Skiplino/skiplino1.png'
import frame3 from '../../assets/Skiplino/skiplino2.png'
import frame4 from '../../assets/Skiplino/skiplino3.png'
import frame5 from '../../assets/Skiplino/skiplino4.png'
import frame6 from '../../assets/Skiplino/skiplino5.png'
import frame7 from '../../assets/Skiplino/skiplino6.jpg'
import frame8 from '../../assets/Skiplino/skiplino7.jpg'
import frame9 from '../../assets/Skiplino/skiplino8.jpg'
import frame10 from '../../assets/Skiplino/skiplino9.jpg'
import frame11 from '../../assets/Skiplino/skiplino10.jpg'
import frame12 from '../../assets/Skiplino/skiplino11.jpg'

const SkiplinoProject = () => {
  const navigate = useNavigate()

  return (
    <div className="project-page" data-project="skiplino">
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
            <strong>Problem:</strong> Users often face long queues and inefficient booking systems when trying to reserve tables, events, or activities. Complex or unintuitive booking processes can result in high drop-off rates.
          </p>
          <p className="project-description">
            <strong>Solution:</strong> A user-friendly interface that simplifies the booking process, ensuring a smooth user journey. Smart filtering and recommendations to help users find the best options based on preferences and availability.
          </p>
          <p className="project-description">
            <strong>My Role:</strong> My responsibility was to research user pain points, map out the ideal booking journey, and design an intuitive interface that enhances the overall user experience.
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-stack">
          <img src={frame1} alt="Skiplino Cover" />
          <img src={frame3} alt="Skiplino Design" />
          <img src={frame2} alt="Skiplino Design Process" />
          <img src={frame4} alt="Skiplino Interface" />
          <img src={frame5} alt="Skiplino Features" />
          <img src={frame6} alt="Skiplino Final Design" />
          <img src={frame7} alt="Skiplino Additional Design 1" />
          <img src={frame8} alt="Skiplino Additional Design 2" />
          <img src={frame9} alt="Skiplino Additional Design 3" />
          <img src={frame10} alt="Skiplino Additional Design 4" />
          <img src={frame11} alt="Skiplino Additional Design 5" />
          <img src={frame12} alt="Skiplino Additional Design 6" />
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

export default SkiplinoProject 