import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  features, 
  live, 
  status, 
  year, 
  icon, 
  type 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize status colors to prevent re-renders
  const getStatusColor = useMemo(() => {
    switch (status) {
      case 'Active':
        return {
          bg: 'bg-green-500/20',
          text: 'text-green-400',
          border: 'border-green-500/30',
          gradient: 'from-green-500 to-green-600'
        };
      case 'Completed':
        return {
          bg: 'bg-blue-500/20',
          text: 'text-blue-400',
          border: 'border-blue-500/30',
          gradient: 'from-blue-500 to-blue-600'
        };
      case 'In Progress':
        return {
          bg: 'bg-yellow-500/20',
          text: 'text-yellow-400',
          border: 'border-yellow-500/30',
          gradient: 'from-yellow-500 to-yellow-600'
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          text: 'text-gray-400',
          border: 'border-gray-500/30',
          gradient: 'from-gray-500 to-gray-600'
        };
    }
  }, [status]);

  const statusColors = getStatusColor;

  return (
    <motion.div
      className="group relative h-full min-h-[600px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Simplified glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      
      {/* Main card */}
      <div className="relative h-full min-h-[600px] bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 shadow-xl overflow-hidden flex flex-col">
        
        {/* Header with app logo */}
        <div className="relative p-6 md:p-8 flex-shrink-0">
          {/* Status and year badges */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`relative inline-flex items-center justify-center px-3 py-1.5 ${statusColors.bg} ${statusColors.border} border rounded-lg backdrop-blur-sm shadow-lg transform group-hover:scale-105 transition-all duration-300 overflow-hidden`}>
                {/* Simplified background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${statusColors.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative flex items-center justify-center space-x-1.5">
                  <div className={`w-1.5 h-1.5 ${statusColors.text.replace('text-', 'bg-')} rounded-full animate-pulse flex-shrink-0`}></div>
                  <span className={`${statusColors.text} text-xs font-semibold tracking-wide`}>{status}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-400 font-medium">{year}</div>
              <div className="text-xs text-gray-500 mt-1">{type}</div>
            </div>
          </div>

          {/* App logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-gray-600/30 group-hover:border-gray-500/50 transition-all duration-300 transform group-hover:scale-110">
              <img 
                src={icon} 
                alt={`${title} logo`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 items-center justify-center text-2xl">
                🚀
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300 text-center">
            {title}
          </h3>
        </div>

        {/* Content - This will grow to fill available space */}
        <div className="px-6 md:px-8 flex-grow flex flex-col">
          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
            <div className="grid grid-cols-1 gap-2">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {tech.slice(0, 6).map((technology, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800/60 text-gray-300 text-xs rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300"
                >
                  {technology}
                </span>
              ))}
              {tech.length > 6 && (
                <span className="px-3 py-1 bg-gray-700/60 text-gray-400 text-xs rounded-full border border-gray-600/50">
                  +{tech.length - 6} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button - Fixed at bottom */}
        <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View Project</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 
