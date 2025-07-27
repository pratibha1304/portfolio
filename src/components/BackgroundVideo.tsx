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
      {/* Organic wave patterns similar to bgvideo1.mp4 */}
      <div className="absolute inset-0">
        {/* Primary wave clusters */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`wave-cluster-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-lg opacity-30"
            style={{
              width: `${150 + Math.random() * 200}px`,
              height: `${150 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#ffffff',
              animation: `organic-wave ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Secondary wave elements */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`wave-element-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-md opacity-20"
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#ffffff',
              animation: `organic-wave-secondary ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Floating dots */}
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={`floating-dot-${i}`}
            className="absolute rounded-full opacity-40"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#ffffff',
              animation: `floating-dots ${10 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
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