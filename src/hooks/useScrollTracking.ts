import { useState, useEffect } from 'react';

export interface ScrollState {
  scrollY: number;
  scrollProgress: number;
  currentSection: string;
}

export const useScrollTracking = (): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollProgress: 0,
    currentSection: 'hero'
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollY / (documentHeight - windowHeight);

      // Determine current section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'tasks', 'contact'];
      let currentSection = 'hero';

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = sectionId;
          }
        }
      });

      setScrollState({
        scrollY,
        scrollProgress: Math.min(Math.max(scrollProgress, 0), 1),
        currentSection
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
};

