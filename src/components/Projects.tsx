import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Robotic Arm Control System',
      year: '2025',
      description: 'Built a robotic arm using ESP-32 microcontroller for precise movement control. Implemented advanced control algorithms for accurate positioning and smooth operation.',
      technologies: ['ESP-32', 'C++', 'Robotics', 'Control Systems'],
      category: 'Robotics',
      image: '🦾',
      githubUrl: '#', // Add your GitHub URL here
      liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7310618814881161217/' // Add live demo URL if available
    },
    {
      title: 'Smart Weather Assistant',
      year: '2024',
      description: 'Developed an intelligent weather assistant application that provides real-time weather information and forecasts. Features include location-based weather data, interactive UI, and smart recommendations.',
      technologies: ['Python', 'API Integration', 'Weather APIs', 'Data Processing'],
      category: 'AI/ML',
      image: '🌤️',
      githubUrl: 'https://github.com/githubhealer/SmartWeather-Assistant.git',
      liveUrl: 'https://youtu.be/G4asIJ3Gez0'
    },
    {
      title: 'Desktop Assistant',
      year: '2024',
      description: 'Built an intelligent desktop assistant with voice recognition and automation capabilities. Features include voice commands, task automation, system control, and natural language processing for enhanced user interaction.',
      technologies: ['Python', 'Speech Recognition', 'NLP', 'Automation', 'GUI'],
      category: 'AI/ML',
      image: '🤖',
      githubUrl: 'https://github.com/githubhealer/Desktop-Assistant.git',
      liveUrl: 'https://www.youtube.com/watch?v=aJGYLjlSxiE'
    },
    {
      title: 'IoT Temperature Sensing Simulation',
      year: '2024',
      description: 'Simulated IoT-based temperature sensing using Contiki-NG and Cooja simulator. Developed a comprehensive monitoring system with real-time data collection and analysis.',
      technologies: ['Contiki-NG', 'Cooja', 'IoT', 'C', 'Sensor Networks'],
      category: 'IoT',
      image: '🌡️',
      githubUrl: 'https://github.com/githubhealer/Temperature_sensor_contiki_cooja_simulator.git',
      liveUrl: 'https://youtu.be/y7lqTElKrEU'
    },
    {
      title: 'TO-DO Flask Web Application',
      year: '2024',
      description: 'Built a full-stack web application for task management using Flask framework. Features include user authentication, CRUD operations, task categorization, and responsive design.',
      technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'SQLite'],
      category: 'Web Development',
      image: '📝',
      githubUrl: 'https://github.com/githubhealer/TO_DO-Flask-app.git',
      liveUrl: '#'
    },
    {
      title: 'Credit Card Approval Predictor',
      year: '2024',
      description: 'Developed a machine learning model to predict credit card approval using various applicant features. Implemented data preprocessing, feature engineering, and model evaluation techniques.',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis'],
      category: 'AI/ML',
      image: '💳',
      githubUrl: 'https://github.com/githubhealer/Credit_card_approval_prediction.git',
      liveUrl: 'https://www.youtube.com/watch?v=USYjwgcMiPQ'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects & Research Works
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-meta">
                  <div className="project-category">
                    <Tag size={16} />
                    {project.category}
                  </div>
                  <div className="project-year">
                    <Calendar size={16} />
                    {project.year}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a 
                  href={project.githubUrl} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.githubUrl === '#') {
                      e.preventDefault();
                      alert('GitHub repository URL not available for this project');
                    }
                  }}
                >
                  <Github size={18} />
                  View Code
                </a>
                <a 
                  href={project.liveUrl} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.liveUrl === '#') {
                      e.preventDefault();
                      alert('Live demo not available for this project');
                    }
                  }}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
