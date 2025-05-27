import React, { useState, useEffect } from 'react';
import './App.css';

// Import pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

// Import components
import Navigation from './components/Navigation';
import Stats from './components/Stats';
import CodeSymbols from './components/CodeSymbols';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by their position on the page
        const sortedEntries = entries.sort((a, b) => {
          return a.target.offsetTop - b.target.offsetTop;
        });
        
        // Find the most visible section
        let mostVisibleSection = null;
        let maxVisibility = 0;
        
        sortedEntries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });
        
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      { 
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Backup scroll listener for better section detection
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };

    // Only observe main navigation sections
    const mainSections = ['home',  'projects', 'about', 'contact'];
    mainSections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener as backup
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden relative">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Home Section */}
      <Home isLoading={isLoading} />


      {/* Stats Section */}
      <Stats />

      {/* Code Symbols Section */}
      <CodeSymbols />

      {/* Projects Section */}
      <Projects isVisible={isVisible} />

      {/* About Section */}
      <About isVisible={isVisible} />

      {/* Contact Section */}
      <Contact isVisible={isVisible} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 