import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ 
  skill, 
  percentage, 
  icon, 
  description, 
  color = 'red',
  delay = 0 
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(null);

  // Memoize color schemes
  const colorSchemes = useMemo(() => ({
    red: {
      gradient: 'from-red-500 to-red-600',
      bg: 'bg-red-500/20',
      text: 'text-red-400',
      glow: 'shadow-red-500/30'
    },
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-500/20',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/30'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      bg: 'bg-green-500/20',
      text: 'text-green-400',
      glow: 'shadow-green-500/30'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-500/20',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/30'
    },
    pink: {
      gradient: 'from-pink-500 to-pink-600',
      bg: 'bg-pink-500/20',
      text: 'text-pink-400',
      glow: 'shadow-pink-500/30'
    }
  }), []);

  const currentScheme = colorSchemes[color] || colorSchemes.red;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simplified progress animation
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 1500;
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Simple easing
          const easeOut = 1 - Math.pow(1 - progress, 2);
          setProgress(easeOut * percentage);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <motion.div
      ref={progressRef}
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Simplified glow effect */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${currentScheme.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 shadow-lg">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">{icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                {skill}
              </h3>
              {description && (
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {description}
                </p>
              )}
            </div>
          </div>
          
          {/* Percentage */}
          <div className={`text-2xl font-black bg-gradient-to-r ${currentScheme.gradient} bg-clip-text text-transparent`}>
            {Math.round(progress)}%
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="relative">
          {/* Background bar */}
          <div className="w-full h-3 bg-gray-800/60 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
            {/* Progress fill */}
            <motion.div
              className={`h-full bg-gradient-to-r ${currentScheme.gradient} rounded-full relative overflow-hidden`}
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Simplified shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              
              {/* Progress indicator dot */}
              {progress > 5 && (
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
              )}
            </motion.div>
          </div>

          {/* Simplified particle effects for high percentages */}
          {percentage >= 80 && isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 ${currentScheme.bg} rounded-full`}
                  animate={{
                    x: [Math.random() * 100, Math.random() * 100],
                    y: [Math.random() * 20, Math.random() * 20],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressBar; 