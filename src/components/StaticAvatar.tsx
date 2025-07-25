import React from 'react';
import { motion } from 'framer-motion';

const StaticAvatar: React.FC = () => {
  return (
    <div className="relative">
      <div className="avatar-glow w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
        <img
          src="/portfoliophoto.jpg"
          alt="Pratibha Soni"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      {/* Cyberpunk Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-theme-accent to-theme-accent-secondary rounded-lg opacity-80 flex items-center justify-center"
      >
        <span className="text-black text-xs font-mono">{'</>'}</span>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-8 -left-8 w-10 h-10 bg-gradient-to-r from-theme-accent to-theme-accent-secondary rounded-full opacity-80 flex items-center justify-center"
      >
        <span className="text-black text-xs">AI</span>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          x: [0, 8, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/4 -left-10 w-8 h-8 bg-gradient-to-r from-theme-accent to-theme-accent-secondary transform rotate-45 opacity-80"
      />
      
      {/* Data stream effect */}
      <motion.div
        className="absolute top-1/2 -right-12 w-1 h-20 bg-gradient-to-b from-transparent via-theme-accent to-transparent"
        animate={{ 
          opacity: [0, 1, 0],
          height: [0, 80, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 -left-8 w-1 h-16 bg-gradient-to-b from-theme-accent via-theme-accent-secondary to-transparent"
        animate={{ 
          opacity: [0, 1, 0],
          height: [0, 64, 0]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  );
};

export default StaticAvatar;

