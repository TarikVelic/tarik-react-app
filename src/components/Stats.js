import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

// Enhanced Stats Counter with better animations and design
const StatsCounter = ({ end, duration = 2500, suffix = "", prefix = "", description, icon, color = "red" }) => {
  const [count, setCount] = useState(0);
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

  // Optimized counter animation
  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Simplified easing
        const easeOut = 1 - Math.pow(1 - progress, 2);
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  // Memoize color classes to prevent re-renders
  const colorClasses = useMemo(() => ({
    red: {
      gradient: 'from-red-500 to-red-600',
      text: 'text-red-400',
      bg: 'from-red-500/10 to-red-600/10'
    },
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      text: 'text-blue-400',
      bg: 'from-blue-500/10 to-blue-600/10'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      text: 'text-green-400',
      bg: 'from-green-500/10 to-green-600/10'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      text: 'text-purple-400',
      bg: 'from-purple-500/10 to-purple-600/10'
    }
  }), []);

  const currentColor = colorClasses[color] || colorClasses.red;

  return (
    <motion.div 
      ref={ref} 
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Simplified background glow */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${currentColor.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      {/* Main card */}
      <div className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 shadow-xl`}>
        
        {/* Counter display */}
        <div className="relative text-center">
          {/* Icon at the top */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl">{icon}</span>
            </div>
          </div>

          <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${currentColor.gradient} bg-clip-text text-transparent mb-3`}>
            {prefix}{count}{suffix}
          </div>
          
          {/* Description with simplified styling */}
          <div className="space-y-2">
            <div className={`h-1 w-12 bg-gradient-to-r ${currentColor.gradient} rounded-full mx-auto`}></div>
            <div className="text-gray-300 text-sm font-medium tracking-wide uppercase">
              {description}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            By the Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Measurable impact through innovative software solutions
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCounter 
            end={15} 
            suffix="+" 
            description="Projects Completed" 
            icon="🚀"
            color="red"
            duration={2000}
          />
          <StatsCounter 
            end={3} 
            suffix="+" 
            description="Years Experience" 
            icon="⏱️"
            color="blue"
            duration={2200}
          />
          <StatsCounter 
            end={8} 
            suffix="+" 
            description="Technologies Mastered" 
            icon="⚡"
            color="green"
            duration={2400}
          />
          <StatsCounter 
            end={10} 
            suffix="k+" 
            description="Users Served" 
            icon="👥"
            color="purple"
            duration={2600}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats; 