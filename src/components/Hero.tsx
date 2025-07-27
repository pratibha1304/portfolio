import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StaticAvatar from './StaticAvatar';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-theme-bg relative overflow-hidden">
      {/* Navigation Bar - Top Right */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 right-0 z-20 p-8"
      >
        <div className="flex items-center space-x-8">
          {['About', 'Projects', 'Experience', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                color: "var(--theme-accent)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-theme-muted hover:text-theme-accent font-medium text-lg transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-accent transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Theme-based Background */}
      <div className="absolute inset-0">
        {/* Background handled by CosmicBackground component in App.tsx */}
      </div>

      {/* Main content container with perfect alignment */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-16 xl:px-20 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10 lg:pr-12"
            >
              {/* Name with holographic glitch animation */}
              <div className="space-y-6 relative">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight relative"
                >
                  <motion.span
                    className="block text-theme-text mb-2 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Pratibha
                    {/* Holographic overlay */}
                    <span className="absolute inset-0 bg-theme-accent/20 animate-pulse"></span>
                  </motion.span>
                  <motion.span
                    className="block text-gradient relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Soni
                    {/* Glitch effect overlay */}
                    <motion.span
                      className="absolute inset-0 text-gradient"
                      animate={{
                        x: [0, 2, -2, 0],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      Soni
                    </motion.span>
                  </motion.span>

                  {/* Floating code snippets */}
                  <motion.div
                    className="absolute -right-20 top-10 text-xs text-theme-accent/40 font-mono"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {'<Developer />'}
                  </motion.div>

                  <motion.div
                    className="absolute -left-16 bottom-5 text-xs text-theme-accent/40 font-mono"
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    {'{ innovation: true }'}
                  </motion.div>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-theme-accent">
                  Creative Developer & Tech Explorer
                </h2>
                <p className="text-lg lg:text-xl text-theme-text-secondary leading-relaxed max-w-2xl">
                  Where <span className="text-theme-accent font-medium">innovation</span> meets{' '}
                  <span className="text-theme-accent font-medium">creativity</span>, and{' '}
                  <span className="text-theme-text font-medium">dreams</span> become reality through code.
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-theme-muted text-base lg:text-lg font-medium"
              >
                Google WE Scholar | Full-Stack Developer | AI Enthusiast
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-5 pt-6"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(203, 216, 59, 0.6), inset 0 0 20px rgba(203, 216, 59, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white font-semibold rounded-xl overflow-hidden group"
                  onClick={() => scrollToSection('about')}
                >
                  <span className="relative z-10">Explore My Universe</span>
                  {/* Neon border effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-theme-accent to-theme-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: [-100, 300]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear"
                    }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: "var(--theme-accent)",
                    boxShadow: "0 0 20px rgba(203, 216, 59, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 border-2 border-theme-border text-theme-text font-semibold rounded-xl hover:border-theme-accent hover:text-theme-accent transition-all duration-300 overflow-hidden group"
                  onClick={() => scrollToSection('contact')}
                >
                  <span className="relative z-10">Let's Connect</span>
                  {/* Holographic effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-theme-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(90deg, rgba(203, 216, 59, 0.1) 0%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(203, 216, 59, 0.1) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(203, 216, 59, 0.1) 100%)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <StaticAvatar />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

