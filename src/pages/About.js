import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from '../components/ProgressBar';

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
          <div className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-3">
            {prefix}{count}{suffix}
          </div>
          <div className="text-gray-300 text-xs md:text-sm font-semibold tracking-wide uppercase">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Experience Card
const ExperienceCard = ({ title, company, period, location, description, technologies, isActive = false, projectImage }) => {
  return (
    <div className={`group relative transition-all duration-700 h-full ${
      isActive ? 'transform -translate-y-2' : ''
    }`}>
      <div className={`absolute -inset-1 bg-gradient-to-r rounded-3xl blur transition duration-1000 ${
        isActive 
          ? 'from-red-600 via-purple-600 to-red-600 opacity-40' 
          : 'from-red-600 via-purple-600 to-red-600 opacity-20 group-hover:opacity-40'
      }`}></div>
      <div className={`relative bg-gray-900/70 backdrop-blur-xl rounded-3xl border transition-all duration-700 h-full flex ${
        isActive 
          ? 'border-red-500/50 shadow-2xl shadow-red-500/20' 
          : 'border-gray-700/50 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10'
      }`}>
        {/* Project Logo - Left Side */}
        {projectImage && (
          <div className="flex-shrink-0 p-6 md:p-8 flex items-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 flex items-center justify-center">
              <img 
                src={projectImage} 
                alt={`${company} logo`}
                className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>
        )}
        
        {/* Content - Right Side */}
        <div className="flex-grow p-6 md:p-8 flex flex-col">
          {isActive && (
            <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-4 py-2 rounded-full font-bold mb-6 shadow-lg self-start">
              ✨ Current Position
            </div>
          )}
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
            <div className="mb-4 lg:mb-0 flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
              <div className="text-red-400 font-bold text-base md:text-lg">{company}</div>
              <div className="text-gray-400 text-sm">{location}</div>
            </div>
            <div className="lg:text-right flex-shrink-0">
              <div className="text-gray-300 text-sm font-semibold">{period}</div>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 text-red-300 rounded-lg text-xs md:text-sm border border-red-500/30 backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component


const About = ({ isVisible }) => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/tarikcv.pdf'; // Correct path to your CV file in public folder
    link.download = 'tarik-velic-cv.pdf'; // Desired filename when downloaded
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: "Full Stack Developer & Part-time AI Engineer",
      company: "ShopCircle / HulkApps",
      period: "Jan 2023 - Present • 2+ years",
      location: "Sarajevo, Bosnia and Herzegovina • Full-time · On-site",
      description: "Leading full-stack development for multiple web applications and software solutions. Developing and maintaining scalable applications that serve thousands of users worldwide. Working with modern technologies including React, Node.js, TypeScript, and cloud platforms. Additionally working part-time as an AI Engineer, implementing machine learning solutions and AI-powered features to enhance user experience and business intelligence.",
      technologies: ["React.js", "TypeScript", "Node.js", "Remix.js", "MySQL", "Amazon Web Services (AWS)", "GraphQL", "JavaScript", "Python", "TensorFlow", "AI/ML", "Shopify API"],
      isActive: true,
      projectImage: "/shopcircle.png"
    },
    {
      title: "Software Engineer Intern", 
      company: "AntColony",
      period: "Mar 2023 - Jun 2023 • 4 mos",
      location: "Sarajevo, Bosnia and Herzegovina • Internship",
      description: "Developed frontend components using MERN stack and gained experience in modern web development practices and team collaboration.",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Git", "MERN Stack"],
      projectImage: "/antcolony.jpeg"
    },
    {
      title: "Software Engineer Intern",
      company: "Zira",
      period: "Jun 2022 - Aug 2022 • 3 mos",
      location: "Sarajevo, Bosnia and Herzegovina • Internship",
      description: "Gained hands-on experience in MERN stack development, working on real-world projects and learning industry best practices.",
      technologies: ["React", "Node.js", "JavaScript", "Git", "Agile", "MERN Stack"],
      projectImage: "/zira.jpg"
    }
  ];

  

  return (
    <section id="about" className="py-20 md:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          {/* About Me Section */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 md:mb-28">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-10 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">Tarik Velic</h2>
              <h3 className="text-2xl md:text-3xl text-red-400 font-bold mb-6 md:mb-8 flex items-center gap-4">
                <img 
                  src="/tarik-profile-placeholder.jpg" 
                  alt="Tarik Velic - Full-Stack Developer" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-500/50 shadow-lg shadow-red-500/30"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                Full-Stack Software Developer
              </h3>

              {/* Personal Information */}
              <div className="mb-8 md:mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-4 border border-red-500/20">
                    <div className="text-red-400 text-sm font-semibold mb-1">Age</div>
                    <div className="text-white text-lg font-bold">25 years old</div>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-4 border border-red-500/20">
                    <div className="text-red-400 text-sm font-semibold mb-1">Born in</div>
                    <div className="text-white text-lg font-bold">Sarajevo, BiH</div>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-4 border border-red-500/20">
                    <div className="text-red-400 text-sm font-semibold mb-1">Specialization</div>
                    <div className="text-white text-lg font-bold">Full-Stack Developer</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-6 md:mb-8">
                Passionate full-stack software developer with 3+ years of experience building scalable web applications and solutions across various industries and technologies.
              </p>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-6 md:mb-8">
                Specialized in modern web technologies including React, Node.js, and cloud platforms. Experienced in e-commerce, fintech, and enterprise applications with a focus on performance and user experience.
              </p>
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8 md:mb-10">
                Currently working as a Full Stack Developer at Shop Circle, where I contribute to innovative software solutions and continuously expand my technical expertise across the full development stack.
              </p>
              
              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-12">
                <StatsCounter end={3} suffix="+" description="Years Experience" />
                <StatsCounter end={15} suffix="+" description="Projects Built" />
                <StatsCounter end={10} suffix="k+" description="Users Served" />
              </div>
              
              {/* Technical Skills */}
              <div className="mb-10 md:mb-12">
                <h4 className="text-white font-bold mb-10 text-xl md:text-2xl flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Technical Expertise
                </h4>
                <div className="space-y-12">
                  <ProgressBar 
                    percentage={95} 
                    label="Frontend Development" 
                    description="React, TypeScript, Next.js, Vue.js, Tailwind CSS"
                    color="red" 
                    size="large" 
                    glowing={true}
                    animated={true}
                    duration={250}
                    icon="⚛️"
                  />
                  <ProgressBar 
                    percentage={86} 
                    label="Backend Development" 
                    description="Node.js, Express, Remix, Python, REST APIs, GraphQL"
                    color="blue" 
                    size="large" 
                    glowing={true}
                    animated={true}
                    duration={250}
                    delay={20}
                    icon="⚙️"
                  />
                  <ProgressBar 
                    percentage={88} 
                    label="Database Design" 
                    description="MySQL, PostgreSQL, MongoDB, Redis, Database Architecture"
                    color="purple" 
                    size="large" 
                    glowing={true}
                    animated={true}
                    duration={250}
                    delay={40}
                    icon="🗄️"
                  />
                  <ProgressBar 
                    percentage={60} 
                    label="Cloud & DevOps" 
                    description="AWS, Docker, CI/CD, Serverless, Infrastructure"
                    color="orange" 
                    size="large" 
                    glowing={true}
                    animated={true}
                    duration={250}
                    delay={60}
                    icon="☁️"
                  />
                  <ProgressBar 
                    percentage={82} 
                    label="E-commerce Development" 
                    description="Shopify Apps, Payment Systems, E-commerce Solutions"
                    color="green" 
                    size="large" 
                    glowing={true}
                    animated={true}
                    duration={250}
                    delay={80}
                    icon="🛍️"
                  />
                  <ProgressBar 
                    percentage={30} 
                    label="AI & Machine Learning" 
                    description="Python, TensorFlow, Machine Learning, Data Analysis"
                    color="cyan" 
                    size="large" 
                    glowing={true}
                    animated={true}
                    duration={250}
                    delay={100}
                    icon="🤖"
                  />
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-10 md:mb-12">
                <h4 className="text-white font-bold mb-8 text-xl md:text-2xl flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  Education
                </h4>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                          🏛️
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h5 className="text-xl md:text-2xl font-bold text-white mb-2">Bachelor of Computer Science</h5>
                        <div className="text-blue-400 font-bold text-lg mb-2">University of PIM</div>
                        <div className="text-gray-400 text-sm mb-4">Banja Luka, Bosnia and Herzegovina • 4 Years (240ETCS)</div>
                        <p className="text-gray-300 text-base leading-relaxed mb-4">
                          Completed comprehensive 4-year Computer Science program with focus on software engineering, 
                          algorithms, data structures, and modern programming paradigms. Gained strong foundation in 
                          theoretical computer science and practical software development.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 backdrop-blur-sm">
                            Software Engineering
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 backdrop-blur-sm">
                            Algorithms & Data Structures
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 backdrop-blur-sm">
                            Database Systems
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 backdrop-blur-sm">
                            Web Development
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleDownloadCV}
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl font-black text-lg md:text-xl transition-all duration-500 hover:scale-105 shadow-2xl shadow-red-500/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
            
            {/* Profile Image */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                <div className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-red-500/20 via-purple-500/20 to-red-800/20 backdrop-blur-xl border border-red-500/30 aspect-square transform hover:scale-105 transition-transform duration-700 shadow-2xl shadow-red-500/20">
                  <img 
                    src="/tarik-profile-placeholder.jpg" 
                    alt="Tarik Velic - Full-Stack Developer & Shopify Expert" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl md:text-9xl transform hover:scale-110 transition-transform duration-500" style={{display: 'none'}}>
                    👨‍💻
                  </div>
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Tarik Velic</h3>
                      <p className="text-red-400 font-semibold">Full-Stack Developer</p>
                      <p className="text-gray-300 text-sm mt-2">Leading innovation in e-commerce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">Professional Experience</h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                A journey of continuous growth, innovation, and technical excellence across multiple industries
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </div>
            
            {/* Career Highlights */}
            <div className="text-center mt-16">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-red-500/30 max-w-5xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Career Highlights</h3>
                  <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                      <div className="text-gray-300 font-semibold text-sm md:text-base">Years Experience</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                      <div className="text-gray-300 font-semibold text-sm md:text-base">Projects Delivered</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">Full-Stack</div>
                      <div className="text-gray-300 font-semibold text-sm md:text-base">Development Focus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Impact */}
            <div className="text-center mt-16">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-red-500/30 max-w-6xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Technical Impact</h3>
                  <div className="grid md:grid-cols-4 gap-6 md:gap-8 text-center">
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">10k+</div>
                      <div className="text-gray-300 font-semibold text-sm md:text-base">Users Served</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                      <div className="text-gray-300 font-semibold text-sm md:text-base">Uptime Achieved</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">Multiple</div>
                      <div className="text-gray-300 font-semibold text-sm md:text-base">Tech Stacks</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">Scalable</div>
                      <div className="text-gray-300 font-semibold text-sm md:text-base">Solutions Built</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 