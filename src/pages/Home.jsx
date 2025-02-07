import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Home.css'
import DecryptedText from '../components/DecryptedText'
import launchpadImage from '../assets/Launchpad.png'
import opensponsorImage from '../assets/Opensponsor.jpg'
import cobiImage from '../assets/cobi.png'
import credabilityImage from '../assets/credability.jpg'
import talmenaImage from '../assets/talmena.png'
import skiplinoImage from '../assets/skiplino.jpg'
import founderiseImage from '../assets/founderise.jpg'
import walaaImage from '../assets/walaa.png'

const Home = () => {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false)
  const navigate = useNavigate()

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="home-container" style={{ background: '#FFFFFF', color: 'black' }}>
        <nav className="nav-container">
          <div className="logo">
            Sawsan Arja
          </div>
          <div className="nav-links">
            <button 
              onClick={() => {
                const projectsSection = document.querySelector('.work-section');
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="nav-link-button"
            >
              <span className="nav-bullet">•</span> Playground
            </button>
            <Link to="/contact"><span className="nav-bullet">•</span> Get in touch</Link>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text-large">
            <DecryptedText
              text="Hello! I am Sawsan, a UI/UX Designer and Brand Specialist. I am crazy about creating seamless digital experiences and user centric solutions. When i'm not busy pushing pixels, I will be nerding out on the latest design trends, creating digital art and sketching my next big idea. Let's build awesome things together!"
              speed={15}
              maxIterations={10}
              sequential={true}
              revealDirection="start"
              animateOn="view"
              className="decrypted"
              encryptedClassName="encrypted"
              onComplete={() => setTextAnimationComplete(true)}
            />
          </div>
        </div>
        
        {textAnimationComplete && (
          <motion.div 
            className="scroll-down-button"
            onClick={scrollToNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 0.5
            }}
          >
            <motion.div 
              className="scroll-arrow"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </div>

      <section className="work-section" id="projects">
        <div className="work-grid">
          <div className="work-card" onClick={() => navigate('/projects/launchpad')}>
            <img 
              src={launchpadImage}
              alt="Launchpad Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>Launchpad</h3>
              <p>Brand Strategy • Visual Identity • Art Direction</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/opensponsor')}>
            <img 
              src={opensponsorImage}
              alt="OpenSponsor Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>OpenSponsor</h3>
              <p>Branding • UI/UX</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/credability')}>
            <img 
              src={credabilityImage}
              alt="Credability Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>Credability</h3>
              <p>UI/UX • Web Design • Brand Identity</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/cobi')}>
            <img 
              src={cobiImage}
              alt="Cobi Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>Cobi</h3>
              <p>UI/UX • Mobile App • Brand Identity</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/talmena')}>
            <img 
              src={talmenaImage}
              alt="Talmena Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>Talmena</h3>
              <p>UI/UX • Mobile App • Brand Identity</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/skiplino')}>
            <img 
              src={skiplinoImage}
              alt="Skiplino Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>Skiplino</h3>
              <p>UI/UX • Web App • Brand Identity</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/founderise')}>
            <img 
              src={founderiseImage}
              alt="Founderise Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>Founderise</h3>
              <p>UI/UX • Web Platform • Brand Identity</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/walaa')}>
            <img 
              src={walaaImage}
              alt="Walaa Project" 
              className="work-card-image"
            />
            <div className="work-content">
              <h3>Walaa</h3>
              <p>UI/UX • Web App • Brand Identity</p>
            </div>
          </div>
        </div>
        <div className="yellow-strip">
          <div className="strip-content">
            • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT •
          </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <div className="social-links">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button">
                LinkedIn
              </a>
              <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button">
                Dribbble
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button">
                Instagram
              </a>
              <a href="mailto:your@email.com" className="social-button">
                Email
              </a>
            </div>
            <p className="copyright">© 2024 Sawsan Arja. All rights reserved.</p>
          </div>
          <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
          </div>
        </footer>
      </section>
    </>
  )
}

export default Home