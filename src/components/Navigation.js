import React, { useEffect } from 'react';

const Navigation = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      // Update URL hash
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  // Update URL hash when activeSection changes
  useEffect(() => {
    if (activeSection && window.location.hash !== `#${activeSection}`) {
      window.history.replaceState(null, null, `#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-2xl border-b border-red-500/20 shadow-2xl shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="text-2xl md:text-3xl font-black">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">&lt;Tarik Velic/&gt;</span>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-all duration-300 font-bold text-base lg:text-lg relative px-4 py-2 rounded-xl ${
                  activeSection === item.toLowerCase() 
                    ? 'text-white bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30' 
                    : 'text-gray-300 hover:text-red-400 hover:bg-red-500/10'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-red-400 transition-colors p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 