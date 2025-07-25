import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Users, Code, TrendingUp, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "Google WE Scholar",
      description: "Selected as Google Women Engineers Scholar for academic excellence and leadership potential",
      color: "text-yellow-400"
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Maintaining CGPA of 8.78 in Computer Science Engineering",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Led multiple technical projects and mentored junior developers",
      color: "text-blue-400"
    }
  ];

  

  return (
    <section id="experience" className="py-20 section-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-theme-accent rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-theme-text mb-6">
            Experience & <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning, professional growth, and technical excellence 
            in software development and emerging technologies.
          </p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-theme-text mb-8 flex items-center gap-3">
            <Briefcase className="text-theme-accent" size={32} />
            Professional Experience
          </h3>

          <div className="card p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-theme-text" size={32} />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-theme-text mb-2">Software Development Intern</h4>
                    <p className="text-xl text-theme-accent font-semibold">LinuxWorld Informatics Pvt Ltd</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                      Internship
                    </span>
                    <div className="flex items-center gap-4 text-theme-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        June 2024 - August 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        Jaipur, India
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-theme-text-secondary mb-6 leading-relaxed">
                  Working on agentic AI systems using GenAI, Docker, Kubernetes, Jenkins, and AWS. Built projects with
                  Streamlit, Gradio, Python, and JavaScript. Gained experience in frontend/backend basics, Git/GitHub, and
                  deploying on Linux-based environments.
                </p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-theme-text mb-4">Key Achievements:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-theme-text-secondary">Developed and deployed multiple Python and full stack applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-theme-text-secondary">Worked with modern development tools and frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-theme-text-secondary">Participated in code reviews and team collaboration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-theme-text-secondary">Gained experience in project management and agile methodologies</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "Linux", "Git", "Software Development"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-theme-accent/20 text-theme-accent-secondary rounded-full text-sm font-medium border border-theme-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-theme-text mb-8 flex items-center gap-3">
            <Award className="text-theme-accent" size={32} />
            Key Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:border-theme-accent/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-theme-secondary/50 flex items-center justify-center ${achievement.color} group-hover:bg-theme-accent/20 transition-all duration-300`}>
                  <achievement.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-theme-text mb-3">{achievement.title}</h4>
                <p className="text-theme-text-secondary leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8">
            <h3 className="text-3xl font-bold text-theme-text mb-4">
              Let's Create Together
            </h3>
            <p className="text-theme-text-secondary mb-6 max-w-2xl mx-auto">
              I believe that the best solutions come from the intersection of technical expertise and 
              creative thinking. Ready to build something amazing?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="btn-primary"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

