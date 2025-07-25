import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Rocket, Heart, Coffee, Zap, Brain, Target } from 'lucide-react';

const About: React.FC = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "C", "JavaScript"],
    "Web Technologies": ["React", "Node.js", "HTML/CSS", "Bootstrap", "MongoDB", "Express", "EJS"],
    "Tools & Technologies": ["Git/GitHub", "Docker", "AWS", "Firebase", "VS Code"],
    "Concepts": ["DSA", "OOP", "DBMS", "REST APIs", "ML Basics", "Agentic AI"],
  };

  const funStats = [
    {
      icon: <Coffee className="w-6 h-6" />,
      number: "∞",
      label: "Cups of Coffee",
      description: "Fueling late-night coding sessions"
    },
    {
      icon: <Code className="w-6 h-6" />,
      number: "500+",
      label: "GitHub Commits",
      description: "Building the future, one commit at a time"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      number: "24/7",
      label: "Creative Mode",
      description: "Always thinking of the next big idea"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      number: "10+",
      label: "Projects Launched",
      description: "From wild ideas to working solutions"
    }
  ];

  const passions = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI & Machine Learning",
      description: "Exploring the frontiers of artificial intelligence"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions that matter"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Women in Tech",
      description: "Empowering the next generation of female developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-theme-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-theme-accent to-theme-accent bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-theme-text mb-4">
                Computer Science Student & <span className="text-theme-accent">Google WE Scholar</span>
              </h3>
              
              <div className="space-y-4 text-theme-text-secondary text-lg leading-relaxed">
                <p>
                  Hey there! I'm a passionate developer who believes in the power of technology to create 
                  meaningful change. Currently pursuing my B.Tech in Computer Science at BIT Mesra, 
                  I'm on a mission to blend <span className="text-theme-accent font-medium">innovation</span> with 
                  <span className="text-theme-accent font-medium"> creativity</span>.
                </p>
                
                <p>
                  As a <span className="text-theme-accent font-medium">Google WE Scholar</span> (selected from 30,000+ applicants), 
                  I combine technical expertise with creative vision to build solutions that truly matter. 
                  From PeerUp's mentorship platform to SheShield's safety innovations, I love turning 
                  <span className="text-theme-accent font-medium"> wild ideas</span> into reality.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring the latest in AI, contributing to open source, 
                  or mentoring fellow developers. I believe in building not just great software, but a 
                  <span className="text-theme-accent font-medium"> better tech community</span> for everyone.
                </p>
              </div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-theme-card/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-theme-accent/20 rounded-lg">
                  <Brain className="w-5 h-5 text-theme-accent" />
                </div>
                <h4 className="text-xl font-semibold text-theme-text">Education</h4>
              </div>
              <div className="space-y-2">
                <h5 className="text-lg font-medium text-theme-text">Bachelor of Technology in Computer Science</h5>
                <p className="text-theme-accent font-medium">Birla Institute of Technology, Mesra - Jaipur</p>
                <p className="text-theme-muted">2023 – 2027</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Fun Stats & Passions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Fun Stats */}
            <div>
              <h4 className="text-2xl font-bold text-theme-text mb-6">Fun Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                {funStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-theme-border/50 hover:border-theme-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-theme-accent/20 rounded-lg text-theme-accent">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-theme-text">{stat.number}</div>
                    </div>
                    <div className="text-sm font-medium text-theme-text-secondary mb-1">{stat.label}</div>
                    <div className="text-xs text-theme-muted">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What I'm Passionate About */}
            <div>
              <h4 className="text-2xl font-bold text-theme-text mb-6">What Drives Me</h4>
              <div className="space-y-4">
                {passions.map((passion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="bg-theme-card/50 backdrop-blur-sm rounded-xl p-4 border border-theme-border/50 hover:border-theme-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-theme-accent/20 rounded-lg text-theme-accent">
                        {passion.icon}
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-theme-text mb-1">{passion.title}</h5>
                        <p className="text-theme-muted text-sm">{passion.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h4 className="text-2xl font-bold text-theme-text mb-8 text-center">Technical Arsenal</h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Languages */}
            <div className="bg-theme-card/50 backdrop-blur-sm rounded-xl p-6 border border-theme-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-theme-accent" />
                <h5 className="text-lg font-semibold text-theme-text">Programming Languages</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                 {skills["Programming Languages"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-theme-accent/20 text-theme-accent-secondary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-theme-card/50 backdrop-blur-sm rounded-xl p-6 border border-theme-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h5 className="text-lg font-semibold text-theme-text">Web Technologies</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                 {skills["Web Technologies"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-theme-card/50 backdrop-blur-sm rounded-xl p-6 border border-theme-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-emerald-400" />
                <h5 className="text-lg font-semibold text-theme-text">Tools & Technologies</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                 {skills["Tools & Technologies"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-theme-card/50 backdrop-blur-sm rounded-xl p-6 border border-theme-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-theme-accent" />
                <h5 className="text-lg font-semibold text-theme-text">Concepts</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                 {skills["Concepts"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-theme-accent/20 text-theme-accent rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


