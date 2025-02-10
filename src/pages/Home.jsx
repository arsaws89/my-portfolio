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
      <div className="home-container" style={{ 
        background: '#FFFFFF', 
        color: 'black',
        height: '100vh',
        overflow: 'hidden'
      }}>
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
          <div className="hero-text-container" style={{ 
            whiteSpace: 'normal',
            maxWidth: '95vw',
            textAlign: 'left',
            marginLeft: 0,
            paddingLeft: 0,
            marginTop: '-2rem',
            position: 'relative'
          }}>
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
              style={{ 
                fontSize: '2.75rem',
                marginLeft: 0,
                paddingLeft: 0,
                whiteSpace: 'normal',
                display: 'block'
              }}
              encryptedStyle={{ 
                opacity: 0.7,
                position: 'absolute',
                visibility: 'visible',
                fontSize: '2.75rem',
                color: '#333'
              }}
            />
            
            {textAnimationComplete && (
              <motion.div 
                className="scroll-down-button"
                onClick={scrollToNext}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3
                }}
                style={{
                  position: 'absolute',
                  bottom: '-4rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  cursor: 'pointer',
                  marginTop: '2rem'
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
                    ease: "easeInOut"
                  }}
                >
                  ↓
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <section className="work-section" id="projects">
        <div className="work-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '4rem',
          padding: '2rem',
          maxWidth: '1800px',
          margin: '0 auto',
          width: '95vw'
        }}>
          <div className="work-card" onClick={() => navigate('/projects/launchpad')} style={{
            marginTop: window.innerWidth <= 768 ? '0' : '-4rem'
          }}>
            <img 
              src={launchpadImage}
              alt="Launchpad Project" 
              className="work-card-image"
              style={{
                width: '100%',
                height: window.innerWidth <= 768 ? '400px' : '600px',
                objectFit: 'cover'
              }}
            />
            <div className="work-content">
              <h3>Launchpad</h3>
              <p>Brand Strategy • Visual Identity • Art Direction</p>
            </div>
          </div>
          <div className="work-card" onClick={() => navigate('/projects/opensponsor')} style={{
            marginTop: window.innerWidth <= 768 ? '0' : '-4rem'
          }}>
            <img 
              src={opensponsorImage}
              alt="OpenSponsor Project" 
              className="work-card-image"
              style={{
                width: '100%',
                height: window.innerWidth <= 768 ? '400px' : '600px',
                objectFit: 'cover'
              }}
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
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
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
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
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
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
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
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
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
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
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
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
            />
            <div className="work-content">
              <h3>Walaa</h3>
              <p>UI/UX • Web App • Brand Identity</p>
            </div>
          </div>
        </div>
      </section>

      <div className="yellow-strip" style={{
        width: '100%',
        backgroundColor: '#FFFB7F',
        overflow: 'hidden',
        padding: '1.5rem 0',
        marginBottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="strip-content" style={{ 
          color: 'black',
          whiteSpace: 'nowrap',
          width: '100%',
          textAlign: 'center',
          fontSize: '30px',
          lineHeight: '1'
        }}>
          • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT • LET'S BUILD YOUR PRODUCT •
        </div>
      </div>

      <footer className="footer" style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '2rem 0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 0
      }}>
        <div className="footer-content" style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/sawsanarja/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button"
            >
              LinkedIn
            </a>
            <a 
              href="https://dribbble.com/Sawsanarja"
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button"
            >
              Dribbble
            </a>
            <a 
              href="https://www.instagram.com/unwastethetrash/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button"
            >
              Instagram
            </a>
            <a 
              href="mailto:sawsan.arja@gmail.com"
              className="social-button"
            >
              Email
            </a>
          </div>
          <p className="copyright">© 2024 Sawsan Arja. All rights reserved.</p>
        </div>
        <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </div>
      </footer>
    </>
  )
}

export default Home