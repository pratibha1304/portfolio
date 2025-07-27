import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Calendar, Code, Database, Globe, Zap, Folder, Filter, Shield, Lock, Users, ChevronDown, ChevronUp } from 'lucide-react';
import SectionBackground from './SectionBackground';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('featured');
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectCategories = [
    { id: 'featured', name: 'Featured Projects', icon: Star, count: 5 },
    { id: 'web', name: 'Web Development', icon: Globe, count: 2 },
    { id: 'security', name: 'Security & AI', icon: Shield, count: 2 },
    { id: 'devops', name: 'DevOps', icon: Database, count: 2 },
    { id: 'tools', name: 'Tools & Utilities', icon: Code, count: 2 }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Dockerized Microservices Architecture",
      description: "Built and containerized two Flask-based microservices with PostgreSQL and Redis caching.",
      longDescription: "A comprehensive microservices project built during summer internship under Vimal Daga Sir's guidance. Successfully implemented Docker containerization, PostgreSQL database integration, Redis caching, and orchestrated services with Docker Compose for scalable architecture.",
      technologies: ["Flask", "Docker", "Docker Compose", "PostgreSQL", "Redis", "Python", "Microservices", "DevOps"],
      github: "https://lnkd.in/ggwvTBMb",
      demo: "#",
      status: "Completed",
      type: "Microservices Project",
      category: "devops",
      featured: true,
      timeline: "Summer 2024",
      role: "DevOps Intern",
      image: "/api/placeholder/400/250",
      stats: {
        stars: 15,
        forks: 5,
        commits: 85
      },
      highlights: [
        "Dockerized User-Service and Data-Service",
        "PostgreSQL database integration",
        "Redis caching for performance optimization",
        "Docker Compose orchestration"
      ]
    },
    {
      id: 2,
      title: "PeerUp - Peer Mentorship Platform",
      description: "Full-stack responsive web & mobile application enabling peer mentorship and buddy matches with dynamic features and real-time communication.",
      longDescription: "A comprehensive peer mentorship platform built with modern technologies. Features include dynamic filters, role-based logic, feedback systems, real-time chat, and seamless profile switching for enhanced user experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Firebase", "MongoDB", "Flutter", "Dart"],
      github: "#",
      demo: "#",
      status: "In Development",
      type: "Full-Stack Application",
      category: "web",
      featured: true,
      timeline: "April 2025 – Present",
      role: "Founder & Full-Stack Developer",
      image: "/api/placeholder/400/250",
      stats: {
        stars: 25,
        forks: 8,
        commits: 120
      },
      highlights: [
        "Dynamic filters and role-based logic",
        "Real-time chat and communication",
        "Profile switching functionality",
        "Responsive web & mobile design"
      ]
    },
    {
      id: 3,
      title: "SheShield - Women's Safety App",
      description: "AI-powered women's safety application with real-time SOS alerts, image capture, geofencing, and local volunteer support system.",
      longDescription: "An innovative safety application designed for women's security. Features real-time SOS alerts with automatic image capture within 2.5 seconds, 500m geofencing capabilities, and local volunteer network integration that reduces emergency response time by 30%.",
      technologies: ["Python", "Twilio", "Tkinter", "OpenCV", "SMTP", "MySQL"],
      github: "https://gitlab.com/pratibhasoni757/sheshield",
      demo: "#",
      status: "Completed",
      type: "Safety Application",
      category: "security",
      featured: true,
      timeline: "Sept 2024 – Present",
      role: "Learning Project for SIH",
      image: "/api/placeholder/400/250",
      stats: {
        stars: 18,
        forks: 5,
        commits: 85
      },
      highlights: [
        "Real-time SOS alerts with 2.5s image capture",
        "500m geofencing technology",
        "30% reduction in response time",
        "Local volunteer support integration"
      ]
    },
    {
      id: 4,
      title: "RSA Cryptanalysis Research",
      description: "Research-based cryptographic project implementing 5 RSA attack methods with advanced mathematical algorithms for security analysis.",
      longDescription: "A comprehensive research project focused on RSA cryptographic analysis. Successfully implemented 5 different RSA attack methods, including Coppersmith's attack capable of cracking 1024-bit keys in 75 seconds. Applied Chinese Remainder Theorem to reduce decryption complexity by 30%.",
      technologies: ["Python", "RSA Module", "gmpy2", "sympy", "pycryptodome", "HTML", "CSS"],
      github: "https://gitlab.com/the-cyber-knights/rsa",
      demo: "#",
      status: "Completed",
      type: "Research Project",
      category: "security",
      featured: true,
      timeline: "June 2024 – Aug 2024",
      role: "Research-Based Project",
      image: "/api/placeholder/400/250",
      stats: {
        stars: 22,
        forks: 12,
        commits: 65
      },
      highlights: [
        "5 RSA attack methods implemented",
        "1024-bit key cracking in 75 seconds",
        "30% complexity reduction via CRT",
        "Advanced cryptographic research"
      ]
    },
    {
      id: 5,
      title: "DevOps Flask Application",
      description: "Complete DevOps pipeline with Flask application, Docker containerization, and Jenkins CI/CD automation for seamless deployment.",
      longDescription: "A comprehensive DevOps project demonstrating modern deployment practices. Features a Flask web application with complete Docker containerization and Jenkins CI/CD pipeline that automatically builds and deploys whenever changes are pushed to GitHub.",
      technologies: ["Flask", "Docker", "Jenkins", "CI/CD", "Python", "Git"],
      github: "https://github.com/pratibha1304/DevOps",
      demo: "#",
      status: "Completed",
      type: "DevOps Project",
      category: "devops",
      featured: true,
      timeline: "Recent",
      role: "DevOps Engineer",
      image: "/api/placeholder/400/250",
      stats: {
        stars: 15,
        forks: 5,
        commits: 32
      },
      highlights: [
        "Flask web application with REST API",
        "Docker containerization",
        "Jenkins CI/CD automation",
        "GitHub integration for deployment"
      ]
    }
  ];

  const smallerProjects = [
    {
      id: 6,
      title: "Gradio Interactive Menu",
      description: "Interactive menu application built with Gradio for machine learning interfaces with dynamic UI components.",
      technologies: ["Python", "Gradio", "ML Interface"],
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/projects/gradioMenu.py",
      demo: "#",
      status: "Completed",
      type: "Tool",
      category: "tools",
      featured: false,
      timeline: "Recent",
      role: "Developer",
      image: "/api/placeholder/400/250",
      stats: {
        stars: 8,
        forks: 3,
        commits: 15
      },
      highlights: [
        "Interactive ML interface",
        "Dynamic UI components",
        "Gradio framework integration"
      ]
    },
    {
      id: 7,
      title: "Streamlit Dashboard",
      description: "Interactive dashboard and menu system using Streamlit framework with data visualization capabilities.",
      technologies: ["Python", "Streamlit", "Data Visualization"],
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/projects/streamlitMenu.py",
      demo: "#",
      status: "Completed",
      type: "Dashboard",
      category: "tools",
      featured: false,
      timeline: "Recent",
      role: "Developer",
      image: "/api/placeholder/400/250",
      stats: {
        stars: 12,
        forks: 4,
        commits: 28
      },
      highlights: [
        "Interactive dashboard",
        "Data visualization",
        "Streamlit framework"
      ]
    }
  ];

  const allProjects = [...featuredProjects, ...smallerProjects];
  
  const filteredProjects = activeFilter === 'featured' 
    ? featuredProjects 
    : activeFilter === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Microservices Project': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Full-Stack Application': return 'bg-theme-accent/20 text-theme-accent-secondary border-theme-accent/30';
      case 'Safety Application': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Research Project': return 'bg-theme-accent/20 text-theme-accent border-theme-accent/30';
      case 'DevOps Project': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Tool': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Dashboard': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      default: return 'bg-gray-500/20 text-theme-text-secondary border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 section-bg-secondary relative overflow-hidden">
      {/* Enhanced Section Background */}
      <SectionBackground section="projects" intensity="medium" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-theme-text mb-6">
            <span className="text-gradient-primary">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative projects spanning full-stack development, AI/ML applications, 
            security research, and DevOps automation. Each project demonstrates technical expertise and creative problem-solving.
          </p>
        </motion.div>

        {/* Project Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-theme-accent text-theme-text shadow-lg shadow-theme-accent/30'
                  : 'card text-theme-text-secondary hover:border-theme-accent/50'
              }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {filteredProjects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="card p-8 group project-box relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(26, 26, 26, 0.8) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(203, 216, 59, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-theme-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'radial-gradient(circle at 50% 50%, rgba(203, 216, 59, 0.1) 0%, transparent 70%)',
                     filter: 'blur(20px)'
                   }}>
              </div>
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {project.featured && (
                      <span className="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                        <Star size={14} />
                        Featured
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-theme-text mb-2 group-hover:text-theme-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-theme-muted text-sm mb-2">{project.timeline}</p>
                  <p className="text-theme-accent text-sm font-medium">{project.role}</p>
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-theme-secondary/50 rounded-full text-theme-muted hover:text-theme-text hover:bg-theme-accent transition-all duration-300"
                >
                  <Github size={20} />
                </motion.a>
              </div>

              {/* Project Description */}
              <p className="text-theme-text-secondary mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              {project.highlights && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-theme-text mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-theme-text-secondary text-sm">
                        <div className="w-1.5 h-1.5 bg-theme-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-theme-accent/20 text-theme-accent-secondary rounded-full text-sm font-medium border border-theme-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Stats */}
              <div className="flex items-center gap-6 mb-6 text-sm text-theme-muted">
                <div className="flex items-center gap-1">
                  <Star size={16} />
                  <span>{project.stats.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap size={16} />
                  <span>{project.stats.forks} forks</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{project.stats.commits} commits</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-theme-secondary/50 text-theme-text rounded-xl hover:bg-gray-600/50 transition-all duration-300 border border-theme-border/30"
                >
                  <Github size={18} />
                  View Code
                </motion.a>
                
                {project.demo !== "#" && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-theme-accent text-theme-text rounded-xl hover:bg-theme-accent-secondary transition-all duration-300 shadow-lg shadow-theme-accent/30"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Smaller Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={() => setShowAllProjects(!showAllProjects)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 mx-auto px-8 py-4 card hover:border-theme-accent/50 transition-all duration-300"
          >
            <Folder size={20} className="text-theme-accent" />
            <span className="text-lg font-semibold text-theme-text">
              {showAllProjects ? 'Hide' : 'View'} Smaller Projects & Tools
            </span>
            {showAllProjects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </motion.button>

          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {smallerProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-theme-text">{project.title}</h4>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-theme-secondary/50 rounded-full text-theme-muted hover:text-theme-text hover:bg-theme-accent transition-all duration-300"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                  
                  <p className="text-theme-text-secondary mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-theme-accent/20 text-theme-accent-secondary rounded-full text-xs font-medium border border-theme-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <span className="flex items-center gap-1 text-green-400 text-xs font-medium">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    {project.status}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Total Projects', value: '7', icon: Folder, color: 'text-theme-accent' },
            { label: 'Technologies Used', value: '25+', icon: Code, color: 'text-cyan-400' },
            { label: 'GitHub Stars', value: '95+', icon: Star, color: 'text-yellow-400' },
            { label: 'Total Commits', value: '385+', icon: Calendar, color: 'text-green-400' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 card"
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-3xl font-bold text-theme-text mb-2">{stat.value}</div>
              <div className="text-theme-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

