import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, features, github, live, status, year, icon, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-red-500/20 text-red-400 border-red-500/30';
    }
  };

  return (
    <motion.div 
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col">
        
        {/* Header Section */}
        <div className="p-6 md:p-8 flex-shrink-0">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-500 flex-shrink-0">{icon}</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-3 leading-tight">
                  {title}
                </h3>
                <div className="flex items-center space-x-3 flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold border backdrop-blur-sm ${getStatusColor(status)}`}>
                    {status}
                  </span>
                  <span className="text-gray-400 text-xs md:text-sm font-semibold">{year}</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">{description}</p>
        </div>
        
        {/* Content Section */}
        <div className="px-6 md:px-8 flex-grow">
          <div className="mb-6">
            <h4 className="text-white font-bold mb-3 text-base md:text-lg">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, index) => (
                <span key={index} className="px-2 md:px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 text-red-300 rounded-lg text-xs md:text-sm border border-red-500/30 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-white font-bold mb-3 text-base md:text-lg">Key Features:</h4>
            <ul className="space-y-2">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="text-gray-300 text-xs md:text-sm flex items-start">
                  <span className="text-red-400 mr-2 text-sm md:text-base flex-shrink-0 mt-0.5">✦</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
              {features.length > 4 && (
                <li className="text-gray-400 text-xs md:text-sm italic">
                  +{features.length - 4} more features...
                </li>
              )}
            </ul>
          </div>
        </div>
        
        {/* Footer Section */}
        <div className="p-6 md:p-8 pt-0 flex-shrink-0">
          <div className="flex items-center justify-between gap-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors transform hover:scale-105 duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">Code</span>
              </a>
            )}
            
            {live && (
              <a 
                href={live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30 group/btn"
              >
                <span>View Live</span>
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 