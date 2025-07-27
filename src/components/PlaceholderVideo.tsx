import React from 'react';

const PlaceholderVideo: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      {/* Animated background pattern similar to organic waves */}
      <div className="absolute inset-0 bg-black">
        {/* Primary wave clusters */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`wave-cluster-${i}`}
              className="absolute rounded-full mix-blend-multiply filter blur-lg"
              style={{
                width: `${120 + Math.random() * 150}px`,
                height: `${120 + Math.random() * 150}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: '#ffffff',
                animation: `organic-wave ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>
        
        {/* Secondary wave elements */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`wave-element-${i}`}
              className="absolute rounded-full mix-blend-multiply filter blur-md"
              style={{
                width: `${40 + Math.random() * 80}px`,
                height: `${40 + Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: '#ffffff',
                animation: `organic-wave-secondary ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
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

      {/* Subtle animated overlay for depth */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-theme-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default PlaceholderVideo; 