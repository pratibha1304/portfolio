import React, { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  type?: 'particles' | 'waves' | 'grid' | 'all';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  intensity = 'medium', 
  type = 'all' 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParticleCount = () => {
    switch (intensity) {
      case 'low': return 20;
      case 'high': return 60;
      default: return 40;
    }
  };

  const getWaveCount = () => {
    switch (intensity) {
      case 'low': return 3;
      case 'high': return 8;
      default: return 5;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating particles */}
      {(type === 'particles' || type === 'all') && (
        <div className="absolute inset-0">
          {Array.from({ length: getParticleCount() }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full opacity-30"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#CBD83B', '#ffffff', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 4)],
                animation: `floating-particles ${6 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
              }}
            />
          ))}
        </div>
      )}

      {/* Animated waves */}
      {(type === 'waves' || type === 'all') && (
        <div className="absolute inset-0">
          {Array.from({ length: getWaveCount() }, (_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
              style={{
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#CBD83B', '#00ffff', '#ff00ff', '#00ff00'][Math.floor(Math.random() * 4)],
                animation: `circuit-pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Animated grid pattern */}
      {(type === 'grid' || type === 'all') && (
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(203, 216, 59, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(203, 216, 59, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'tech-grid-pulse 6s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              animation: 'tech-grid-pulse 8s ease-in-out infinite reverse'
            }}
          />
        </div>
      )}

      {/* Data flow lines */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`data-line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-theme-accent to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%',
              animation: `data-flow ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>

      {/* Hologram flicker effect */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(203, 216, 59, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)
            `,
            animation: 'hologram-flicker 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Mouse-following glow */}
      <div 
        className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(203, 216, 59, 0.3) 0%, transparent 70%)',
          transition: 'all 0.3s ease-out'
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 