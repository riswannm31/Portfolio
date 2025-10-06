import { useState } from 'react'
import './Portfolio.css'
import Login from '../images/LOGIN.png'
import HomePage from '../images/HOME PAGE.png'
import Artist from '../images/ARTIST.png'
import Exploree from '../images/EXPLORE.png'
import Lyrics from '../images/LYRICS PAGE.png'
import Discover from '../images/MacBook Pro 16_ - 8.jpg'
import Signup from '../images/SIGNUP.png'

function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Music Zone Login',
      category: 'ui-design',
      description: 'Modern login interface for music streaming application',
      image: Login,
      tags: ['Figma', 'UI Design']
    },
    {
      id: 2,
      title: 'Music Zone Home',
      category: 'ui-design',
      description: 'Engaging home page design with personalized recommendations',
      image: HomePage,
      tags: ['Figma', 'UI Design']
    },
    {
      id: 3,
      title: 'Artist Selection',
      category: 'ui-design',
      description: 'Interactive artist selection interface with visual appeal',
      image: Artist,
      tags: ['Figma', 'UI Design']
    },
    {
      id: 4,
      title: 'Explore Page',
      category: 'ui-design',
      description: 'Content discovery interface with intuitive navigation',
      image: Exploree,
      tags: ['Figma', 'UI Design']
    },
    {
      id: 5,
      title: 'Lyrics Display',
      category: 'ui-design',
      description: 'Clean and readable lyrics interface with playback controls',
      image: Lyrics,
      tags: ['Figma', 'UI Design']
    },
    {
      id: 6,
      title: 'Website Discover',
      category: 'ui-design',
      description: 'Discover page of Website',
      image: Discover,
      tags: ['Figma', 'UI Design']
    },
    {
      id: 7,
      title: 'Signup Page',
      category: 'ui-design',
      description: 'Signup page ',
      image: Signup,
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
