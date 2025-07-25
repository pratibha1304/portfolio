import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, GitBranch, Server, CheckCircle, Clock, Star, Filter } from 'lucide-react';

const Tasks: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const taskCategories = [
    { id: 'all', name: 'All Tasks', icon: Code, count: 29 },
    { id: 'python', name: 'Python', icon: Code, count: 10 },
    { id: 'javascript', name: 'JavaScript', icon: Terminal, count: 5 },
    { id: 'docker', name: 'Docker', icon: Database, count: 12 },
    { id: 'git', name: 'Git & GitHub', icon: GitBranch, count: 2 }
  ];

  const tasks = [
    // Python Tasks
    {
      id: 1,
      title: "Custom Image Processing",
      description: "Advanced image manipulation and processing using Python libraries",
      technologies: ["Python", "PIL", "OpenCV"],
      difficulty: "Advanced",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/imageProcessing.py"
    },
    {
      id: 2,
      title: "Email Automation System",
      description: "Automated email sending system without authentication requirements",
      technologies: ["Python", "SMTP", "Email"],
      difficulty: "Beginner",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/emailWithoutAuth.py"
    },
    {
      id: 3,
      title: "Website Scraper & Downloader",
      description: "Complete website scraping and downloading functionality",
      technologies: ["Python", "BeautifulSoup", "Requests"],
      difficulty: "Advanced",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/websiteScraper.py"
    },
    {
      id: 4,
      title: "AI Face Swap Application",
      description: "AI-powered face swapping functionality using computer vision",
      technologies: ["Python", "OpenCV", "AI/ML"],
      difficulty: "Advanced",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/faceSwap.py"
    },
    {
      id: 5,
      title: "Google Search Automation",
      description: "Automated Google search operations and result processing",
      technologies: ["Python", "Selenium", "Web Scraping"],
      difficulty: "Intermediate",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/googleSearch.py"
    },
    {
      id: 6,
      title: "Advanced Mail System",
      description: "Comprehensive email functionality with advanced features",
      technologies: ["Python", "SMTP", "IMAP"],
      difficulty: "Intermediate",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/advancedMail.py"
    },
    {
      id: 7,
      title: "Interactive Menu Application",
      description: "Menu-based application with interactive user interface",
      technologies: ["Python", "CLI", "User Interface"],
      difficulty: "Beginner",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/menuApp.py"
    },
    {
      id: 8,
      title: "SMS Integration System",
      description: "SMS sending and receiving functionality integration",
      technologies: ["Python", "Twilio", "SMS API"],
      difficulty: "Intermediate",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/smsIntegration.py"
    },
    {
      id: 9,
      title: "Voice Assistant Application",
      description: "Voice-controlled assistant with speech recognition",
      technologies: ["Python", "Speech Recognition", "TTS"],
      difficulty: "Advanced",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/voiceAssistant.py"
    },
    {
      id: 10,
      title: "Bulk Email Sender",
      description: "Mass email sending system with template support",
      technologies: ["Python", "SMTP", "Email Templates"],
      difficulty: "Intermediate",
      status: "completed",
      category: "python",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/bulkEmailSender.py"
    },

    // JavaScript Tasks
    {
      id: 11,
      title: "Dynamic Web Calculator",
      description: "Interactive calculator with advanced mathematical operations",
      technologies: ["JavaScript", "HTML", "CSS"],
      difficulty: "Intermediate",
      status: "completed",
      category: "javascript",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/js/calculator.js"
    },
    {
      id: 12,
      title: "Todo List Manager",
      description: "Feature-rich todo application with local storage",
      technologies: ["JavaScript", "Local Storage", "DOM"],
      difficulty: "Beginner",
      status: "completed",
      category: "javascript",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/js/todoList.js"
    },
    {
      id: 13,
      title: "Weather Dashboard",
      description: "Real-time weather information display with API integration",
      technologies: ["JavaScript", "Weather API", "Fetch"],
      difficulty: "Intermediate",
      status: "completed",
      category: "javascript",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/js/weatherApp.js"
    },
    {
      id: 14,
      title: "Image Gallery Viewer",
      description: "Interactive image gallery with lightbox functionality",
      technologies: ["JavaScript", "CSS3", "DOM Manipulation"],
      difficulty: "Intermediate",
      status: "completed",
      category: "javascript",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/js/imageGallery.js"
    },
    {
      id: 15,
      title: "Form Validation System",
      description: "Comprehensive form validation with real-time feedback",
      technologies: ["JavaScript", "Regex", "Form Handling"],
      difficulty: "Beginner",
      status: "completed",
      category: "javascript",
      github: "https://github.com/pratibha1304/Tasks/blob/main/TaskList/js/formValidation.js"
    },

    // Docker Tasks
    {
      id: 16,
      title: "Run Any Tool in Docker",
      description: "Experiment with running software inside a Docker container",
      technologies: ["Docker", "Container", "Software Deployment"],
      difficulty: "Intermediate",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 17,
      title: "Apache Webserver in Docker",
      description: "Set up and configure the Apache webserver in Docker",
      technologies: ["Docker", "Apache", "Web Server"],
      difficulty: "Intermediate",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 18,
      title: "Systemctl in Docker Container",
      description: "Find a way to run the systemctl command inside a Docker container",
      technologies: ["Docker", "Systemctl", "Linux"],
      difficulty: "Advanced",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 19,
      title: "GUI Software in Docker",
      description: "Find a way to run graphical software inside a Docker container",
      technologies: ["Docker", "GUI", "X11"],
      difficulty: "Advanced",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 20,
      title: "Sound Card Access in Docker",
      description: "Give sound card access to any program inside Docker",
      technologies: ["Docker", "Audio", "Sound Card"],
      difficulty: "Advanced",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 21,
      title: "Docker in Docker (DIND)",
      description: "Learn how to set up Docker inside Docker",
      technologies: ["Docker", "DIND", "Container Orchestration"],
      difficulty: "Advanced",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 22,
      title: "Linear Regression in Docker",
      description: "Use Python to write and execute Linear Regression inside a Docker container",
      technologies: ["Docker", "Python", "Machine Learning"],
      difficulty: "Intermediate",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 23,
      title: "Flask Web App in Docker",
      description: "Create and run a Python Flask web application from within a Docker container",
      technologies: ["Docker", "Flask", "Python", "Web App"],
      difficulty: "Intermediate",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 24,
      title: "CLI Project in Docker",
      description: "Place your menu-based CLI project into a Docker container and execute it",
      technologies: ["Docker", "CLI", "Python"],
      difficulty: "Intermediate",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 25,
      title: "Firefox in Docker",
      description: "Create a Docker container and install Firefox (GUI setup needed)",
      technologies: ["Docker", "Firefox", "GUI", "Browser"],
      difficulty: "Advanced",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 26,
      title: "VLC Media Player in Docker",
      description: "Install VLC inside Docker and play media (use X11 or VNC for GUI)",
      technologies: ["Docker", "VLC", "Media Player", "X11", "VNC"],
      difficulty: "Advanced",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 27,
      title: "Apache Configuration in Docker",
      description: "Install and configure Apache web server inside a Docker container",
      technologies: ["Docker", "Apache", "Web Server", "Configuration"],
      difficulty: "Intermediate",
      status: "completed",
      category: "docker",
      github: "https://github.com/pratibha1304/Tasks"
    },

    // Git & GitHub Tasks
    {
      id: 28,
      title: "Git Workflow Automation",
      description: "Automated Git workflows and repository management",
      technologies: ["Git", "GitHub Actions", "CI/CD"],
      difficulty: "Intermediate",
      status: "completed",
      category: "git",
      github: "https://github.com/pratibha1304/Tasks"
    },
    {
      id: 29,
      title: "GitHub Repository Management",
      description: "Advanced GitHub repository management and collaboration",
      technologies: ["Git", "GitHub", "Version Control"],
      difficulty: "Intermediate",
      status: "completed",
      category: "git",
      github: "https://github.com/pratibha1304/Tasks"
    }
  ];

  const filteredTasks = activeFilter === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === activeFilter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-theme-text-secondary border-gray-500/30';
    }
  };

  const getTaskStats = () => {
    const completed = tasks.filter(task => task.status === 'completed').length;
    const python = tasks.filter(task => task.category === 'python').length;
    const javascript = tasks.filter(task => task.category === 'javascript').length;
    const total = tasks.length;

    return { completed, python, javascript, total };
  };

  const stats = getTaskStats();

  return (
    <section id="tasks" className="py-20 section-bg-primary relative overflow-hidden">
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
            Tasks <span className="text-gradient-primary">Completed</span>
          </h2>
          <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of coding challenges, automation scripts, and technical implementations 
            across multiple programming languages and technologies.
          </p>
        </motion.div>

        {/* Task Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 card"
          >
            <CheckCircle className="mx-auto mb-3 text-green-400" size={32} />
            <div className="text-3xl font-bold text-theme-text mb-2">{stats.completed}</div>
            <div className="text-theme-muted text-sm">Completed Tasks</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 card"
          >
            <Code className="mx-auto mb-3 text-theme-accent" size={32} />
            <div className="text-3xl font-bold text-theme-text mb-2">{stats.python}</div>
            <div className="text-theme-muted text-sm">Python Tasks</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 card"
          >
            <Terminal className="mx-auto mb-3 text-cyan-400" size={32} />
            <div className="text-3xl font-bold text-theme-text mb-2">{stats.javascript}</div>
            <div className="text-theme-muted text-sm">JavaScript Tasks</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 card"
          >
            <Star className="mx-auto mb-3 text-yellow-400" size={32} />
            <div className="text-3xl font-bold text-theme-text mb-2">{stats.total}</div>
            <div className="text-theme-muted text-sm">Total Tasks</div>
          </motion.div>
        </motion.div>

        {/* Task Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {taskCategories.map((category) => (
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

        {/* Tasks Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 group"
            >
              {/* Task Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-theme-text mb-2 group-hover:text-theme-accent transition-colors">
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(task.difficulty)}`}>
                      {task.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-green-400 text-xs font-medium">
                      <CheckCircle size={12} />
                      {task.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Task Description */}
              <p className="text-theme-text-secondary mb-4 text-sm leading-relaxed">
                {task.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {task.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-theme-accent/20 text-theme-accent-secondary rounded-full text-xs font-medium border border-theme-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <motion.a
                href={task.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-theme-secondary/50 text-theme-text rounded-xl hover:bg-theme-accent transition-all duration-300 border border-theme-border/30 hover:border-theme-accent"
              >
                <Code size={16} />
                View Code
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8">
            <h3 className="text-3xl font-bold text-theme-text mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-theme-text-secondary mb-6 max-w-2xl mx-auto">
              Check out my complete collection of coding challenges, automation scripts, 
              and technical implementations on GitHub.
            </p>
            <motion.a
              href="https://github.com/pratibha1304/Tasks"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <GitBranch size={20} />
              View All Tasks on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tasks;

