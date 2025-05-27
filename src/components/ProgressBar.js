import React, { useState, useEffect, useRef } from 'react';

const ProgressBar = ({ 
  percentage, 
  label, 
  color = 'red', 
  size = 'medium',
  showPercentage = true,
  animated = true,
  gradient = true,
  glowing = false,
  striped = false,
  duration = 2000,
  delay = 0
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && animated) {
      const timer = setTimeout(() => {
        let startTime;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCurrentPercentage(Math.floor(progress * percentage));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (!animated) {
      setCurrentPercentage(percentage);
    }
  }, [isVisible, percentage, animated, duration, delay]);

  const colorClasses = {
    red: {
      bg: 'from-red-500 to-red-600',
      text: 'text-red-400',
      glow: 'shadow-red-500/50',
      border: 'border-red-500/30'
    },
    blue: {
      bg: 'from-blue-500 to-blue-600',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/50',
      border: 'border-blue-500/30'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      text: 'text-green-400',
      glow: 'shadow-green-500/50',
      border: 'border-green-500/30'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/50',
      border: 'border-purple-500/30'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      text: 'text-orange-400',
      glow: 'shadow-orange-500/50',
      border: 'border-orange-500/30'
    },
    cyan: {
      bg: 'from-cyan-500 to-cyan-600',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/50',
      border: 'border-cyan-500/30'
    }
  };

  const sizeClasses = {
    small: 'h-2',
    medium: 'h-4',
    large: 'h-6',
    xl: 'h-8'
  };

  const currentColor = colorClasses[color] || colorClasses.red;

  return (
    <div ref={ref} className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-300 font-semibold text-sm md:text-base lg:text-lg">
            {label}
          </span>
          {showPercentage && (
            <span className={`font-bold text-sm md:text-base lg:text-lg ${currentColor.text}`}>
              {currentPercentage}%
            </span>
          )}
        </div>
      )}
      
      <div className={`w-full bg-gray-800/60 backdrop-blur-xl rounded-full overflow-hidden border ${currentColor.border} ${sizeClasses[size]}`}>
        <div 
          className={`
            ${sizeClasses[size]} 
            rounded-full 
            transition-all 
            duration-1000 
            ease-out
            ${gradient ? `bg-gradient-to-r ${currentColor.bg}` : `bg-${color}-500`}
            ${glowing ? `shadow-lg ${currentColor.glow}` : ''}
            ${striped ? 'bg-stripes' : ''}
            relative
            overflow-hidden
          `}
          style={{ width: `${currentPercentage}%` }}
        >
          {striped && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          )}
          
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar; 