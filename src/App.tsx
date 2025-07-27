import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import BackgroundVideo from './components/BackgroundVideo';
import AnimatedBackground from './components/AnimatedBackground';
import { ThemeProvider } from './contexts/ThemeContext';
import { useScrollTracking } from './hooks/useScrollTracking';

function App() {
  const { scrollProgress, currentSection } = useScrollTracking();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300 relative">
        
        {/* Animated Background */}
        <BackgroundVideo type="organic-waves" />
        
        {/* Enhanced Animated Background */}
        <AnimatedBackground intensity="medium" type="all" />
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-theme-secondary z-50">
          <div 
            className="h-full bg-gradient-to-r from-theme-accent to-theme-accent-secondary transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Navigation Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="space-y-4">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'tasks', label: 'Tasks' },
              { id: 'contact', label: 'Contact' }
            ].map((section) => (
              <div key={section.id} className="relative group">
                <button
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    currentSection === section.id
                      ? 'bg-theme-accent border-theme-accent scale-125'
                      : 'border-theme-muted hover:border-theme-accent'
                  }`}
                />
                <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-theme-card text-theme-text px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-theme-border">
                  {section.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Tasks />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-theme-card border-t border-theme-border py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-theme-muted">
              © 2025 Pratibha Soni. Crafted with passion and code.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a 
                href="https://github.com/pratibha1304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-theme-muted hover:text-theme-accent transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/pratibha-soni-a9b1b3250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-theme-muted hover:text-theme-accent transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:pratibhasoni757@gmail.com"
                className="text-theme-muted hover:text-theme-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

