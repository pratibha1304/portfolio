import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
}

const CosmicBackground: React.FC = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  // Generate static twinkling stars
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = theme === 'dark' ? 150 : 80;
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, [theme]);

  // Generate shooting stars periodically
  useEffect(() => {
    if (theme !== 'dark') return;

    const generateShootingStar = () => {
      const newShootingStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 50,
        angle: Math.random() * 45 + 15, // 15-60 degrees
        speed: Math.random() * 2 + 1,
        length: Math.random() * 80 + 40
      };
      
      setShootingStars(prev => [...prev, newShootingStar]);
      
      // Remove shooting star after animation
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, 3000);
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every interval
        generateShootingStar();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [theme]);

  if (theme === 'light') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light mode background with floating geometric shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-lime-50/20 to-lime-100/30" />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-lime-200/20 to-lime-300/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#CBD83B 1px, transparent 1px),
              linear-gradient(90deg, #CBD83B 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gentle wave pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lime-100/20 to-transparent" />
        
        {/* Floating rings */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute border border-lime-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `pulse ${Math.random() * 8 + 6}s ease-in-out infinite`
            }}
          />
        ))}

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(10px) rotate(240deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-gray-900/20" />
      
      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${star.twinkleDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
            transform: `rotate(${shootingStar.angle}deg)`,
            animation: `shootingStarMove 3s linear forwards`
          }}
        >
          <div
            className="bg-gradient-to-r from-white via-lime-200 to-transparent rounded-full"
            style={{
              width: `${shootingStar.length}px`,
              height: '2px',
              boxShadow: '0 0 6px rgba(203, 216, 59, 0.8), 0 0 12px rgba(203, 216, 59, 0.4)'
            }}
          />
        </div>
      ))}

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(8)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = x1 + (Math.random() * 20 - 10);
          const y2 = y1 + (Math.random() * 20 - 10);
          
          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#CBD83B"
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}
      </svg>

      {/* Nebula-like gradient overlays */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #CBD83B 0%, transparent 70%)',
            left: '10%',
            top: '20%',
            animation: 'nebulaPulse 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #CBD83B 0%, transparent 70%)',
            right: '15%',
            bottom: '25%',
            animation: 'nebulaPulse 10s ease-in-out infinite reverse'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes shootingStarMove {
          0% { transform: translateX(0) translateY(0) rotate(var(--angle)); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(200px) translateY(200px) rotate(var(--angle)); opacity: 0; }
        }
        
        @keyframes nebulaPulse {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default CosmicBackground;

