import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const Projects = ({ isVisible }) => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const projects = [
    {
      title: "AI Product Recommendation Engine",
      description: "Developed a custom machine learning model for e-commerce product recommendations using collaborative filtering and content-based algorithms. Implemented real-time recommendation system that increased conversion rates by 25% for Shopify merchants.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Node.js", "React", "MongoDB", "Shopify API"],
      features: ["Collaborative filtering algorithm", "Content-based recommendations", "Real-time processing", "A/B testing framework", "Performance analytics", "25% conversion increase"],
      live: "https://github.com/tarikvelic/ai-product-recommendations",
      status: "Active",
      year: "2024",
      icon: "/python.jpeg",
      type: "AI/ML Projects"
    },
    {
      title: "CartHook Upsells",
      description: "Served as Frontend Lead, developing and optimizing frontend components for CartHook application, implementing Redux-Observable for efficient asynchronous data handling and enhancing application performance using Polaris design system. Built post-purchase upsell flows that significantly increased merchant revenue.",
      tech: ["React", "TypeScript", "Redux", "Redux-Observable", "Polaris", "Shopify API", "GraphQL"],
      features: ["Frontend Lead position", "Post-purchase upsell optimization", "Redux-Observable implementation", "Polaris design system integration", "Performance optimization", "Revenue tracking analytics"],
      live: "https://apps.shopify.com/post-purchase-offers-carthook",
      status: "Active",
      year: "2024",
      icon: "/carthook.webp",
      type: "Shopify Apps"
    },
    {
      title: "Sky Pilot - Digital Downloads",
      description: "Served as Frontend Lead, making key technical decisions and guiding the team in React and TypeScript best practices. Led frontend architecture for digital product delivery system serving thousands of merchants worldwide.",
      tech: ["React", "TypeScript", "SCSS", "Tailwind CSS", "Shopify API", "Node.js"],
      features: ["Frontend Lead position", "Frontend architecture leadership", "React & TypeScript best practices", "Digital product management", "Scalable file delivery system", "Team mentoring"],
      live: "https://apps.shopify.com/sky-pilot",
      status: "Active", 
      year: "2024",
      icon: "/skypilot.webp",
      type: "Shopify Apps"
    },
    {
      title: "Releasit COD Form",
      description: "Full-stack development with Next.js and MySQL database for comprehensive Cash on Delivery order form system. Built high-performance solution handling thousands of orders daily with advanced form customization.",
      tech: ["Next.js", "React", "TypeScript", "MySQL", "Node.js", "Shopify API"],
      features: ["Custom order forms", "MySQL database optimization", "High-volume order processing", "Advanced form builder", "Real-time analytics"],
      live: "https://apps.shopify.com/releasit-cod-order-form",
      status: "Active",
      year: "2024", 
      icon: "/releasitcod.webp",
      type: "Shopify Apps"
    },
    {
      title: "Releasit Cash on Delivery COD",
      description: "Developed comprehensive COD fee management system with advanced pricing rules and automated fee calculation. Integrated with multiple payment gateways and shipping providers for seamless merchant experience.",
      tech: ["React", "Node.js", "MySQL", "Shopify API", "Express", "TypeScript"],
      features: ["Automated fee calculation", "Advanced pricing rules", "Payment gateway integration", "Shipping provider APIs", "Merchant dashboard"],
      live: "https://apps.shopify.com/cash-on-delivery-fee",
      status: "Active",
      year: "2024",
      icon: "/releasitform.webp",
      type: "Shopify Apps"
    }
  ];

  const filterOptions = ["All Projects", "Shopify Apps", "AI/ML Projects"];

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`transition-all duration-1000 ${isVisible?.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <SectionTitle 
            title="Projects" 
            subtitle="Showcasing innovative full-stack applications and software solutions that serve thousands of users worldwide across various industries"
          />
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 mt-16">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-500 transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl shadow-red-500/30'
                    : 'bg-gray-800/60 backdrop-blur-xl text-gray-300 hover:bg-gray-700/60 border border-gray-700/50 hover:border-red-500/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          {/* View More Button */}
     
        </div>
      </div>
    </section>
  );
};

export default Projects; 