import { motion } from 'framer-motion'
import { Code, Database, Cloud } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={32} />,
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Java', level: 65 },
        { name: 'C', level: 40 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Database size={32} />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 60 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Cloud size={32} />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Ubuntu', level: 50 }
      ]
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
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Abilities
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>Technical Expertise</h3>
            <p>
              With a strong foundation in programming languages like C, Java, and Python, 
              combined with hands-on experience in robotics and automation, I bring a 
              comprehensive skill set to tackle complex technical challenges. My expertise 
              spans from low-level hardware programming to high-level AI applications.
            </p>
            <div className="expertise-tags">
              <span className="tag">Robotics</span>
              <span className="tag">Automation</span>
              <span className="tag">IoT</span>
              <span className="tag">AI/ML</span>
              <span className="tag">Autonomous Drone Technology</span>
              <span className="tag">Deep Learning</span>
              <span className="tag">Computer Vision</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
