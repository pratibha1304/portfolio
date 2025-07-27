import React, { useEffect, useState } from 'react';

interface BackgroundVideoProps {
  type?: 'organic-waves' | 'geometric-dots' | 'mixed';
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ 
  type = 'organic-waves' 
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Don't render animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  const getOrganicWaves = () => (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Gentle organic wave patterns - very calm and pleasant */}
      <div className="absolute inset-0">
        {/* Gentle wave clusters - much fewer and slower */}
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`wave-cluster-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-15"
            style={{
              width: `${200 + Math.random() * 150}px`,
              height: `${200 + Math.random() * 150}px`,
              left: `${20 + i * 25}%`,
              top: `${30 + i * 20}%`,
              backgroundColor: '#ffffff',
              animation: `gentle-organic-wave ${12 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Very subtle secondary elements */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`wave-element-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-lg opacity-10"
            style={{
              width: `${80 + Math.random() * 60}px`,
              height: `${80 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#ffffff',
              animation: `gentle-organic-wave-secondary ${15 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 12}s`
            }}
          />
        ))}
        
        {/* Gentle floating dots - much fewer and slower */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`floating-dot-${i}`}
            className="absolute rounded-full opacity-25"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#ffffff',
              animation: `gentle-floating-dots ${20 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Semi-transparent overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
        style={{
          background: `
            linear-gradient(
              135deg, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(0, 0, 0, 0.6) 50%, 
              rgba(0, 0, 0, 0.7) 100%
            )
          `
        }}
      />
    </div>
  );

  const getGeometricDots = () => (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Geometric dot patterns similar to bgvideo2.mp4 */}
      <div className="absolute inset-0">
        {/* Connected dot clusters */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`dot-cluster-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animation: `geometric-pulse ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {/* Central dot */}
            <div className="absolute w-4 h-4 bg-white rounded-full opacity-60"></div>
            {/* Connected dots */}
            {Array.from({ length: 4 }, (_, j) => (
              <div
                key={`connected-dot-${j}`}
                className="absolute w-2 h-2 bg-white rounded-full opacity-40"
                style={{
                  left: `${Math.cos(j * Math.PI / 2) * 30}px`,
                  top: `${Math.sin(j * Math.PI / 2) * 30}px`,
                  animation: `connected-dots ${4 + j}s ease-in-out infinite`,
                  animationDelay: `${j * 0.5}s`
                }}
              />
            ))}
          </div>
        ))}
        
        {/* Blue accent dots */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`blue-dot-${i}`}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `blue-dots ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Connecting lines */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`connecting-line-${i}`}
            className="absolute h-px bg-gradient-to-r from-white/30 via-white/50 to-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `connecting-lines ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Semi-transparent overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
        style={{
          background: `
            linear-gradient(
              135deg, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(0, 0, 0, 0.6) 50%, 
              rgba(0, 0, 0, 0.7) 100%
            )
          `
        }}
      />
    </div>
  );

  const getMixedPattern = () => (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Mixed pattern combining both styles */}
      <div className="absolute inset-0">
        {/* Organic elements */}
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={`mixed-organic-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-lg opacity-25"
            style={{
              width: `${120 + Math.random() * 150}px`,
              height: `${120 + Math.random() * 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#ffffff',
              animation: `organic-wave ${7 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 7}s`
            }}
          />
        ))}
        
        {/* Geometric elements */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`mixed-geometric-${i}`}
            className="absolute w-3 h-3 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `geometric-pulse ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Blue accent elements */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`mixed-blue-${i}`}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-35"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `blue-dots ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Semi-transparent overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
        style={{
          background: `
            linear-gradient(
              135deg, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(0, 0, 0, 0.6) 50%, 
              rgba(0, 0, 0, 0.7) 100%
            )
          `
        }}
      />
    </div>
  );

  return (
    <>
      {type === 'organic-waves' && getOrganicWaves()}
      {type === 'geometric-dots' && getGeometricDots()}
      {type === 'mixed' && getMixedPattern()}
    </>
  );
};

export default BackgroundVideo; 