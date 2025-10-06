import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-title">Riswan NM</h1>
            <p className="hero-subtitle">UI/UX Designer & Developer</p>
            <p className="hero-description">
              Creating beautiful, user-centered digital experiences that combine aesthetics with functionality.
              Passionate about crafting intuitive interfaces and bringing designs to life through code.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={scrollToPortfolio}>
                View Portfolio
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-circle"></div>
              <div className="hero-initials">RN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
