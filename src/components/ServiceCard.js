import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, technologies, features, link }) => {
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2">
        <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed text-lg">{description}</p>
        
        <div className="mb-8">
          <h4 className="text-white font-bold mb-4 text-lg">Technologies:</h4>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 text-red-300 rounded-full text-sm border border-red-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="text-white font-bold mb-4 text-lg">Key Features:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-center">
                <span className="text-red-400 mr-3 text-lg">✦</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <a 
          href={link} 
          className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-bold text-lg group-hover:translate-x-2 transform duration-300"
        >
          Explore More
          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 