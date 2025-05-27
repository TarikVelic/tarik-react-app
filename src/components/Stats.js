import React, { useState, useEffect, useRef } from 'react';

// Enhanced Stats Counter with better animations
const StatsCounter = ({ end, duration = 2500, suffix = "", prefix = "", description }) => {
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

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-red-500/30 hover:border-red-400/60 transition-all duration-500">
          <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-3">
            {prefix}{count}{suffix}
          </div>
          <div className="text-gray-300 text-sm font-semibold tracking-wide uppercase">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatsCounter end={25} suffix="+" description="Projects Completed" />
          <StatsCounter end={7} suffix="+" description="Years Experience" />
          <StatsCounter end={8} suffix="+" description="Companies Worked With" />
          <StatsCounter end={10} suffix="k+ Merchants" description="Served Worldwide" />
        </div>
      </div>
    </section>
  );
};

export default Stats; 