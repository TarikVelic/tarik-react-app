import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  // Throttle scroll events for better performance
  const throttle = useCallback((func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      setIsVisible(progress > 20);
    }, 16), // ~60fps
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Memoize contact options to prevent re-renders
  const contactOptions = useMemo(() => [
    {
      name: 'WhatsApp',
      icon: '📱',
      color: 'from-green-500 to-green-600',
      url: 'https://wa.me/38762005451',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Viber',
      icon: '💬',
      color: 'from-purple-500 to-purple-600',
      url: 'viber://chat?number=38762005451',
      bgColor: 'bg-purple-500'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      color: 'from-gray-700 to-gray-800',
      url: 'https://github.com/tarikvelic',
      bgColor: 'bg-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: 'from-blue-600 to-blue-700',
      url: 'https://linkedin.com/in/tarikvelic',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'Email',
      icon: '✉️',
      color: 'from-red-500 to-red-600',
      url: 'mailto:tarikvelic23@gmail.com',
      bgColor: 'bg-red-500'
    }
  ], []);

  // Simplified animations for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.2, staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Contact Menu - Simplified */}
          <AnimatePresence>
            {isContactMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col space-y-3 mb-4"
              >
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.name}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r ${option.color} rounded-full shadow-lg transition-transform duration-200 border border-white/10`}
                  >
                    {/* Simplified glow - only on hover */}
                    <div className={`absolute inset-0 ${option.bgColor} rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-200`}></div>
                    
                    {/* Icon */}
                    <span className="relative text-lg">{option.icon}</span>
                    
                    {/* Simplified tooltip */}
                    <div className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {option.name}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Toggle Button - Simplified */}
          <motion.button
            onClick={() => setIsContactMenuOpen(!isContactMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-red-500 to-purple-600 rounded-full shadow-lg transition-all duration-200 border border-white/10"
          >
            {/* Simplified glow */}
            <div className="absolute inset-0 bg-red-500 rounded-full blur opacity-0 hover:opacity-20 transition-opacity duration-200"></div>
            
            {/* Icon with simple rotation */}
            <span className={`relative text-xl text-white transition-transform duration-200 ${isContactMenuOpen ? 'rotate-45' : ''}`}>
              {isContactMenuOpen ? '✕' : '💬'}
            </span>
          </motion.button>

          {/* Scroll to Top Button - Simplified */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full shadow-lg transition-all duration-200 border border-white/10"
          >
            {/* Simplified glow */}
            <div className="absolute inset-0 bg-gray-600 rounded-full blur opacity-0 hover:opacity-20 transition-opacity duration-200"></div>
            
            {/* Arrow icon */}
            <span className="relative text-xl text-white">↑</span>
          </motion.button>

          {/* Simplified Progress Bar */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-900/30 z-40">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-purple-600 transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress; 