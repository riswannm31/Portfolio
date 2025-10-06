import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Message sent! Thank you for reaching out.')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'riswan.nm@example.com',
      link: 'mailto:riswan.nm@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 12345 67890',
      link: 'tel:+911234567890'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kannur, Kerala',
      link: null
    }
  ]

  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', url: '#' },
    { icon: '🐱', name: 'GitHub', url: '#' },
    { icon: '🎨', name: 'Behance', url: '#' },
    { icon: '📱', name: 'Instagram', url: '#' }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Let's discuss your project and create something amazing together
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-intro">
              <h3 className="contact-intro-title">Let's Connect</h3>
              <p className="contact-intro-text">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-details">
                    <div className="contact-info-title">{info.title}</div>
                    {info.link ? (
                      <a href={info.link} className="contact-info-value">
                        {info.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>

              {status && <div className="form-status">{status}</div>}
            </form>
          </div>
        </div>

        <footer className="footer">
          <p className="footer-text">
            &copy; 2024 Riswan NM. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
