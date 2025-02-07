import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Show thank you message
    setIsSubmitted(true)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="contact-page">
      <nav className="contact-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
      </nav>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-left">
            <h1>Let's Create Something Amazing Together</h1>
            <div className="contact-text">
              <p>I'm always interested in hearing about new projects and opportunities.</p>
              <p>Drop me a message:</p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="contact-info submitted">
              <div className="thank-you-message">
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
                <p>I'll get back to you soon!</p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="send-another-button"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows="5"
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact 