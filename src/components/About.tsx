import { motion } from 'framer-motion'
import { Target, Heart, Zap } from 'lucide-react'
import './About.css'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Passionate AI & Robotics Student</h3>
            <p>
              I am an enthusiastic AI & Robotics student currently pursuing my B.Tech at 
              Vellore Institute of Technology with a strong academic record (9.16 CGPA). 
              My passion lies in automation, process optimization, and developing innovative 
              solutions using cutting-edge technologies.
            </p>
            <p>
              With hands-on experience in robotics, IoT systems, and AI-driven applications, 
              I'm eager to apply my skills in real-world scenarios through internship 
              opportunities. I believe in continuous learning and staying updated with 
              the latest technological advancements.
            </p>
            <p>
              Beyond academics, I'm an active member of my university's Special Robotics 
              Team (TCR) and have been passionate about robotics since my school days. 
              I also enjoy playing the keyboard and tennis in my free time.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="highlight-card" variants={fadeInUp}>
              <div className="highlight-icon">
                <Target size={32} />
              </div>
              <h4>Goal-Oriented</h4>
              <p>Focused on applying automation skills to optimize workflows and contribute innovative solutions in the industry.</p>
            </motion.div>

            <motion.div className="highlight-card" variants={fadeInUp}>
              <div className="highlight-icon">
                <Heart size={32} />
              </div>
              <h4>Passionate</h4>
              <p>Deeply passionate about RPA, IoT, AI-driven process automation, and cutting-edge robotics technologies.</p>
            </motion.div>

            <motion.div className="highlight-card" variants={fadeInUp}>
              <div className="highlight-icon">
                <Zap size={32} />
              </div>
              <h4>Innovative</h4>
              <p>Always seeking creative solutions and eager to learn new technologies to stay at the forefront of innovation.</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <h4>9.16</h4>
            <p>CGPA</p>
          </div>
          <div className="stat-item">
            <h4>6+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h4>4+</h4>
            <p>Programming Languages</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
