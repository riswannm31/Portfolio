import './Education.css'

function Education() {
  const education = [
    {
      degree: 'Diploma in UI/UX Design',
      institution: 'GTEC Computer Centre',
      location: 'Kannur',
      year: '2023',
      description: 'Comprehensive program covering user interface design, user experience principles, and modern design tools.',
      icon: '🎨'
    },
    {
      degree: 'Bachelor of Commerce (BCom)',
      institution: 'Kannur University',
      location: 'Kannur',
      year: '2022',
      description: 'Developed strong analytical and problem-solving skills with a focus on business and communication.',
      icon: '🎓'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Academic background and professional training
          </p>
        </div>
        <div className="education-content">
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-icon">{edu.icon}</div>
                <div className="education-details">
                  <div className="education-year">{edu.year}</div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">
                    {edu.institution}, {edu.location}
                  </div>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
