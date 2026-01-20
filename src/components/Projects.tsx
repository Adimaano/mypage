import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe API'],
      githubUrl: 'https://github.com/adriandimaano/ecommerce-platform',
      demoUrl: 'https://ecommerce.adriandimaano.dev',
      imageUrl: 'https://via.placeholder.com/400x250/2E8B57/FFFFFF?text=E-Commerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
      technologies: ['React', 'Firebase', 'Redux', 'Material-UI'],
      githubUrl: 'https://github.com/adriandimaano/task-manager',
      demoUrl: 'https://tasks.adriandimaano.dev',
      imageUrl: 'https://via.placeholder.com/400x250/4169E1/FFFFFF?text=Task+Manager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application that provides real-time weather data and forecasts using API integration.',
      technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/adriandimaano/weather-dashboard',
      demoUrl: 'https://weather.adriandimaano.dev',
      imageUrl: 'https://via.placeholder.com/400x250/1E90FF/FFFFFF?text=Weather+App'
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">A collection of my recent work and experiments</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub className="link-icon" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    <FaExternalLinkAlt className="link-icon" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
