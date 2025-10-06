import { useState } from 'react'
import './Portfolio.css'

function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Music Zone Login',
      category: 'ui-design',
      description: 'Modern login interface for music streaming application',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'UI Design']
    },
    {
      id: 2,
      title: 'Music Zone Home',
      category: 'ui-design',
      description: 'Engaging home page design with personalized recommendations',
      image: 'https://images.pexels.com/photos/7319297/pexels-photo-7319297.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'UI Design']
    },
    {
      id: 3,
      title: 'Artist Selection',
      category: 'ui-design',
      description: 'Interactive artist selection interface with visual appeal',
      image: 'https://images.pexels.com/photos/7319301/pexels-photo-7319301.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'UI Design']
    },
    {
      id: 4,
      title: 'Explore Page',
      category: 'ui-design',
      description: 'Content discovery interface with intuitive navigation',
      image: 'https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'UI Design']
    },
    {
      id: 5,
      title: 'Lyrics Display',
      category: 'ui-design',
      description: 'Clean and readable lyrics interface with playback controls',
      image: 'https://images.pexels.com/photos/6899456/pexels-photo-6899456.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'UI Design']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ui-design', label: 'UI Design' },
    { id: 'web-dev', label: 'Web Development' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A showcase of my design and development work
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <p className="portfolio-description">{project.description}</p>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
