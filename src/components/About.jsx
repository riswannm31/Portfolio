import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate UI/UX Designer and Developer based in Kannur, dedicated to creating
              exceptional digital experiences that blend creativity with functionality. With a strong
              foundation in both design principles and development technologies, I bring ideas to life
              through thoughtful design and clean code.
            </p>
            <p className="about-paragraph">
              My journey in the digital world has equipped me with a diverse skill set spanning from
              design tools like Figma and Photoshop to development technologies like HTML, CSS, and
              JavaScript. I believe in the power of user-centered design and strive to create interfaces
              that are not only visually appealing but also intuitive and accessible.
            </p>
            <p className="about-paragraph">
              When I'm not designing or coding, you'll find me exploring the latest design trends,
              learning new technologies, and working on creative projects that push the boundaries
              of what's possible in digital design.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Tools Mastered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
