import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Reduce number of elements for better performance
  const elements = useMemo(() => [
    // Tech icons - reduced from many to just 6
    { type: 'icon', content: '⚛️', size: 'text-2xl', delay: 0 },
    { type: 'icon', content: '🔥', size: 'text-xl', delay: 1 },
    { type: 'icon', content: '⚡', size: 'text-2xl', delay: 2 },
    { type: 'icon', content: '🚀', size: 'text-xl', delay: 3 },
    { type: 'icon', content: '💎', size: 'text-2xl', delay: 4 },
    { type: 'icon', content: '🎯', size: 'text-xl', delay: 5 },
    
    // Simple shapes - reduced from many to just 4
    { type: 'shape', shape: 'circle', delay: 6 },
    { type: 'shape', shape: 'square', delay: 7 },
    { type: 'shape', shape: 'triangle', delay: 8 },
    { type: 'shape', shape: 'diamond', delay: 9 }
  ], []);

  // Simplified animation variants
  const floatVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const getRandomPosition = (index) => ({
    top: `${10 + (index * 8) % 80}%`,
    left: `${5 + (index * 13) % 90}%`,
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20"
          style={getRandomPosition(index)}
          variants={floatVariants}
          animate="animate"
          initial={{ opacity: 0 }}
          transition={{ delay: element.delay * 0.5 }}
        >
          {element.type === 'icon' ? (
            <span className={`${element.size} filter drop-shadow-lg`}>
              {element.content}
            </span>
          ) : (
            <div className={`w-4 h-4 ${
              element.shape === 'circle' ? 'rounded-full bg-red-500/30' :
              element.shape === 'square' ? 'bg-purple-500/30' :
              element.shape === 'triangle' ? 'w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-blue-500/30' :
              'w-4 h-4 bg-green-500/30 rotate-45'
            }`} />
          )}
        </motion.div>
      ))}
      
      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5" />
    </div>
  );
};

export default FloatingElements; 