import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech - AI & Robotics',
      institution: 'Vellore Institute of Technology',
      period: '2023 - Present (2nd Year)',
      cgpa: '9.16 CGPA',
      status: 'ongoing',
      description: 'Currently pursuing Bachelor of Technology in Artificial Intelligence and Robotics with a focus on automation, machine learning, and intelligent systems.',
      achievements: [
        'Consistently high academic performance',
        'Member of Special Robotics Team (TCR)',
        'Active participation in technical events'
      ]
    },
    {
      degree: 'XII Class',
      institution: 'Senior Secondary Education',
      period: 'Completed April 2023',
      cgpa: '94.6%',
      status: 'completed',
      description: 'Completed higher secondary education with excellent academic performance, laying a strong foundation for engineering studies.',
      achievements: [
        'Outstanding academic achievement',
        'Strong foundation in Science and Mathematics',
        'Consistent top performer'
      ]
    },
    {
      degree: 'X Class',
      institution: 'Secondary Education',
      period: 'Completed April 2021',
      cgpa: '95%',
      status: 'completed',
      description: 'Completed secondary education with exceptional performance across all subjects.',
      achievements: [
        'Excellent academic record',
        'Early interest in Science and Technology',
        'Active participation in school activities'
      ]
    }
  ]

  const extracurriculars = [
    {
      title: 'Robotics Enthusiast',
      description: 'Passionate about robotics since school days',
      icon: <Award size={24} />
    },
    {
      title: 'TCR Team Member',
      description: 'University\'s Special Robotics Team',
      icon: <Trophy size={24} />
    },
    {
      title: 'Music & Sports',
      description: 'Keyboard player and Tennis enthusiast',
      icon: <BookOpen size={24} />
    }
  ]

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="education-content">
          <motion.div
            className="education-timeline"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${item.status}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <GraduationCap size={24} />
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.degree}</h3>
                    <div className="grade-badge">
                      {item.cgpa}
                    </div>
                  </div>
                  
                  <div className="timeline-meta">
                    <span className="institution">{item.institution}</span>
                    <span className="period">{item.period}</span>
                  </div>
                  
                  <p className="timeline-description">
                    {item.description}
                  </p>
                  
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="extracurricular-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Extracurricular Activities</h3>
            <div className="extracurricular-grid">
              {extracurriculars.map((activity, index) => (
                <motion.div
                  key={index}
                  className="activity-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="activity-icon">
                    {activity.icon}
                  </div>
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
