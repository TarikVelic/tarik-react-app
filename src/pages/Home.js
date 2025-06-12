import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';
import QuickStats from '../components/QuickStats';

// Enhanced Code Block Component with glassmorphism
const CodeBlock = ({ title, isLoading = false }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-red-500/30 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-red-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
            <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
          </div>
          <span className="text-red-400 text-sm font-mono font-bold tracking-wider">{title}</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed">
          <div className="text-gray-300">
            {isLoading ? (
              <div className="text-red-400 animate-pulse">Loading{dots}</div>
            ) : (
              <div className="space-y-1">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-300 font-bold">whatYouGet</span>
                <span className="text-white">(</span>
                <span className="text-orange-400 italic">tarik_velic</span>
                <span className="text-white">) = {`{`}</span>
                <br />
                <span className="ml-4 text-emerald-400">🚀 Full-Stack Development Mastery</span>
                <br />
                <span className="ml-4 text-emerald-400">🛍️ Shopify Platform Expertise</span>
                <br />
                <span className="ml-4 text-emerald-400">⚡ Performance Optimization Wizard</span>
                <br />
                <span className="ml-4 text-emerald-400">🧠 Innovative Problem-Solving</span>
                <br />
                <span className="ml-4 text-emerald-400">🏗️ Scalable Architecture Design</span>
                <br />
                <span className="ml-4 text-emerald-400">🤝 Exceptional Communication Skills</span>
                <br />
                <span className="ml-4 text-emerald-400">🔄 Continuous Learning & Innovation</span>
                <br />
                <span className="ml-4 text-emerald-400">💎 Premium Quality Delivery</span>
                <br />
                <span className="text-white">{`}`}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = ({ isLoading }) => {
  const typingTexts = [
    "Full-Stack Developer",
    "Shopify Expert", 
    "React Specialist",
    "Full Stack JS Developer",
    "Cloud Architect"
  ];

  const technologies = [
    { 
      name: "AWS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "text-orange-400" 
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "text-green-400" 
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "text-yellow-400" 
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "text-orange-500" 
    },
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "text-cyan-400" 
    },
    { 
      name: "MySQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "text-blue-500" 
    },
    { 
      name: "TypeScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "text-blue-600" 
    },
    { 
      name: "Docker", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "text-blue-400" 
    },
    { 
      name: "Next.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "text-white" 
    },
    { 
      name: "Shopify", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg",
      color: "text-green-500" 
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "text-green-600" 
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            <div className="relative w-40 h-40 mx-auto mb-10 rounded-full overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-red-500/30 transform hover:scale-110 transition-transform duration-500">
              <img 
                src="/tarik-profile-placeholder.jpg" 
                alt="Tarik Velic - Full-Stack Developer & CTO" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white bg-gradient-to-br from-red-500 via-red-600 to-purple-600" style={{display: 'none'}}>
                TV
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-7xl md:text-9xl lg:text-10xl font-black mb-16">
          <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">&lt;Tarik Velic/&gt;</span>
        </h1>
        
        {/* Technology Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-20 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-4 border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 w-16 h-16 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-8 h-8 group-hover:scale-125 transition-transform duration-500 filter brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className={`text-2xl ${tech.color} hidden group-hover:scale-125 transition-transform duration-500`}>
                    {tech.name.charAt(0)}
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-sm font-semibold mt-3">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Typing Animation */}
        <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-16 h-20 flex items-center justify-center">
          <TypingAnimation 
            texts={typingTexts}
            speed={100}
            className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-black"
          />
        </div>
        
        {/* Code Block */}
        <div className="max-w-4xl mx-auto mb-20">
          <CodeBlock title="basic-info.js" isLoading={isLoading} />
        </div>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl font-black text-xl transition-all duration-500 shadow-2xl shadow-red-500/30 flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center">
              Explore My Work 
              <ArrowRight className="ml-2 w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.a>
 
        </motion.div>
        
        {/* Quick Stats */}
        <QuickStats />
      </div>
    </section>
  );
};

export default Home; 