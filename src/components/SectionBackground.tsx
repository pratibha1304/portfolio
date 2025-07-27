import React from 'react';

interface SectionBackgroundProps {
  section: 'hero' | 'about' | 'experience' | 'projects' | 'tasks' | 'contact';
  intensity?: 'low' | 'medium' | 'high';
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ 
  section, 
  intensity = 'medium' 
}) => {
  const getSectionConfig = () => {
    switch (section) {
      case 'hero':
        return {
          particleCount: intensity === 'high' ? 30 : intensity === 'low' ? 15 : 25,
          waveCount: intensity === 'high' ? 6 : intensity === 'low' ? 2 : 4,
          colors: ['#CBD83B', '#ffffff', '#00ffff'],
          animationSpeed: 'fast'
        };
      case 'projects':
        return {
          particleCount: intensity === 'high' ? 40 : intensity === 'low' ? 20 : 30,
          waveCount: intensity === 'high' ? 8 : intensity === 'low' ? 3 : 5,
          colors: ['#CBD83B', '#00ffff', '#ff00ff', '#00ff00'],
          animationSpeed: 'medium'
        };
      case 'tasks':
        return {
          particleCount: intensity === 'high' ? 35 : intensity === 'low' ? 18 : 28,
          waveCount: intensity === 'high' ? 7 : intensity === 'low' ? 3 : 5,
          colors: ['#CBD83B', '#00ffff', '#ff00ff'],
          animationSpeed: 'medium'
        };
      default:
        return {
          particleCount: intensity === 'high' ? 25 : intensity === 'low' ? 12 : 20,
          waveCount: intensity === 'high' ? 5 : intensity === 'low' ? 2 : 3,
          colors: ['#CBD83B', '#ffffff'],
          animationSpeed: 'slow'
        };
    }
  };

  const config = getSectionConfig();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Section-specific particles */}
      <div className="absolute inset-0">
        {Array.from({ length: config.particleCount }, (_, i) => (
          <div
            key={`section-particle-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: config.colors[Math.floor(Math.random() * config.colors.length)],
              animation: `particle-float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Section-specific waves */}
      <div className="absolute inset-0">
        {Array.from({ length: config.waveCount }, (_, i) => (
          <div
            key={`section-wave-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-lg opacity-15"
            style={{
              width: `${150 + Math.random() * 200}px`,
              height: `${150 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: config.colors[Math.floor(Math.random() * config.colors.length)],
              animation: `wave-pulse ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Section-specific data streams */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`section-data-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-theme-accent to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '-100%',
              width: '200%',
              animation: `data-stream ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Section-specific hologram effect */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(203, 216, 59, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)
            `,
            animation: 'hologram-flicker 5s ease-in-out infinite'
          }}
        />
      </div>

      {/* Section-specific scan lines */}
      {section === 'projects' && (
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`scan-line-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-theme-accent to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                animation: `hologram-scan ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionBackground; 