
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const LayeredProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "RAKSHA",
      subtitle: "AI-Powered Surveillance System",
      description: "Smart AI surveillance with real-time threat detection for safer streets and women's safety",
      longDescription: "Advanced computer vision system using YOLO and TensorFlow for real-time threat detection. Features include facial recognition, anomaly detection, and automated alert systems with 95% accuracy in threat identification.",
      video: "/videos/raksha.mp4",
      github: "#",
      demo: "#",
      tags: ["AI", "Computer Vision", "Safety Tech"],
      technologies: ["Node.js", "TensorFlow", "React.js", "Flutter"],
      color: "from-red-500 to-pink-600"
    },
    {
      id: 2,
      title: "VYOM ASSISTS", 
      subtitle: "Business Analytics Platform",
      description: "Business Analytics-Based Appointment Management System for Efficient Customer Service",
      longDescription: "Comprehensive appointment management system with AI-powered analytics, customer behavior prediction, and automated scheduling optimization. Increased client efficiency by 40% and reduced no-shows by 60%.",
      video: "/videos/vyom.mp4",
      github: "#",
      demo: "#",
      tags: ["B2B SaaS", "Analytics", "Automation"],
      technologies: ["MERN Stack", "BERT", "YOLO"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "INFLUENCER HUB",
      subtitle: "AI Matchmaking Platform",
      description: "An ecosystem for brands, influencers, and freelancers to connect, collaborate, and grow—powered by AI matchmaking",
      longDescription: "AI-powered platform connecting brands with influencers through intelligent matchmaking algorithms and real-time analytics dashboard. Facilitated over $2M in brand partnerships with 98% satisfaction rate.",
      video: "/videos/infhub.mp4",
      github: "#", 
      demo: "#",
      tags: ["Web3", "Marketplace", "AI Matching"],
      technologies: ["JavaScript", "D3.js", "React"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 4,
      title: "LOK YATRI",
      subtitle: "Smart Travel Companion",
      description: "A smart travel companion connecting travelers with authentic local experiences and seamless navigation",
      longDescription: "Comprehensive travel platform with AI-powered recommendations, real-time navigation, and local experience booking system. Serving 10K+ travelers with personalized itineraries and local insights.",
      video: "/videos/lokyatri.mp4",
      github: "#",
      demo: "#",
      tags: ["Mobile", "Travel Tech", "Location AI"],
      technologies: ["WebSockets", "React Native", "Flask"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Layered innovation showcasing real-world solutions
          </p>
        </motion.div>
        
        {/* Layered Projects Container */}
        <div className="relative h-[600px] md:h-[700px] perspective-2000">
          {projects.map((project, index) => {
            const offset = (index - currentProject + projects.length) % projects.length;
            const isActive = offset === 0;
            const isNext = offset === 1;
            const isPrev = offset === projects.length - 1;
            const isVisible = offset <= 2;

            return (
              <motion.div
                key={project.id}
                className={`absolute inset-0 cursor-pointer ${isVisible ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, scale: 0.8, z: 0 }}
                animate={{
                  opacity: isActive ? 1 : isNext || isPrev ? 0.7 : 0.4,
                  scale: isActive ? 1 : isNext || isPrev ? 0.9 : 0.8,
                  z: isActive ? 50 : isNext || isPrev ? 30 : 10,
                  x: isActive ? 0 : isNext ? 100 : isPrev ? -100 : 0,
                  y: isActive ? 0 : 20,
                  rotateY: isActive ? 0 : isNext ? -15 : isPrev ? 15 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  zIndex: isActive ? 50 : isNext || isPrev ? 30 : 10
                }}
                onClick={() => isActive && setSelectedProject(project.id)}
              >
                <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden h-full shadow-2xl hover:border-cyan-400/30 transition-all duration-500">
                  {/* Project Header */}
                  <div className="p-6 border-b border-gray-700/50">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-full text-white text-sm font-medium mb-4`}>
                      {project.tags[0]}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-400 font-medium">{project.subtitle}</p>
                  </div>

                  {/* Video Content */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop
                      playsInline
                      src={project.video}
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play size={48} className="mx-auto mb-4 text-cyan-400" />
                        <p className="text-lg font-medium">View Project Details</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs bg-gray-800/50 border border-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      
                      <a 
                        href={project.demo} 
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prevProject}
            className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-white hover:bg-gray-700/50 hover:border-cyan-400/50 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject 
                    ? 'bg-cyan-400' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-white hover:bg-gray-700/50 hover:border-cyan-400/50 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>
      
      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="max-w-5xl w-full bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              
              return (
                <>
                  <div className="relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <X size={20} />
                    </button>
                    
                    <div className="aspect-video">
                      <video 
                        className="w-full h-full object-cover" 
                        autoPlay 
                        muted 
                        loop 
                        controls
                        playsInline
                        src={project.video}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className={`w-full h-1 bg-gradient-to-r ${project.color} rounded-full mb-6`} />
                    
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {project.title}
                    </h2>
                    
                    <p className="text-cyan-400 font-medium text-lg mb-4">{project.subtitle}</p>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Category Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="bg-gray-800/50 border border-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700/50 text-white hover:bg-gray-700/50 hover:border-gray-600/50 transition-colors rounded-full"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                        View Code
                      </a>
                      
                      <a 
                        href={project.demo} 
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 transition-colors rounded-full"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default LayeredProjects;
