import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Design Tools',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Photoshop', level: 85 },
        { name: 'Illustrator', level: 80 },
        { name: 'Canva', level: 88 }
      ]
    },
    {
      title: 'Development',
      skills: [
        { name: 'HTML', level: 92 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Bootstrap', level: 88 }
      ]
    },
    {
      title: 'Video & Content',
      skills: [
        { name: 'CapCut', level: 82 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Comprehensive skill set spanning design and development
          </p>
        </div>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
