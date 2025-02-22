import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Contact.css'

const Contact = () => {
  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <nav className="project-nav">
          <button onClick={() => navigate('/')} className="back-button">
            ← Back
          </button>
        </nav>

        <div className="contact-container thank-you-container">
          <h1>Thank You!</h1>
          <p className="thank-you-message">
            I've received your message and will get back to you soon.
          </p>
          <button 
            onClick={() => navigate('/')} 
            className="back-home-button"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <nav className="project-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back
        </button>
      </nav>

      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p className="contact-description">
          Have a project in mind? Let's create something amazing together.
        </p>

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
              placeholder="your@email.com"
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
              placeholder="Tell me about your project..."
              rows="6"
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact 