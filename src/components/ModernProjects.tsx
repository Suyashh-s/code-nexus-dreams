
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const ModernProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "RAKSHA",
      subtitle: "AI-Powered Surveillance System",
      description: "Smart AI surveillance with real-time threat detection for safer streets and women's safety",
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
      video: "/videos/lokyatri.mp4",
      github: "#",
      demo: "#",
      tags: ["Mobile", "Travel Tech", "Location AI"],
      technologies: ["WebSockets", "React Native", "Flask"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.55, 1.4]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.55, 1.4]
      }
    }
  };

  const tagVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.55, 1.4]
      }
    }
  };

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-black to-black"></div>
        <div className="absolute inset-0 noise-texture opacity-10"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-6 font-mono tracking-tight"
            variants={titleVariants}
          >
            <span className="text-white">FEATURED</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-4 text-gray-400 font-mono"
            variants={tagVariants}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="text-sm tracking-wider">INNOVATION • TECHNOLOGY • IMPACT</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-400"></div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-cyan-400/10 transition-all duration-700">
                {/* Video Container */}
                <div className="aspect-video relative overflow-hidden">
                  <video 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay 
                    muted 
                    loop
                    playsInline
                    src={project.video}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Project Number */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-cyan-400 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2 font-mono tracking-wide group-hover:text-cyan-400 transition-colors duration-300"
                    variants={titleVariants}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-purple-400 font-medium mb-4 tracking-wide"
                    variants={titleVariants}
                  >
                    {project.subtitle}
                  </motion.p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    variants={tagVariants}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs font-mono bg-gray-800/50 border border-gray-700/50 text-cyan-400 px-3 py-1 rounded-full 
                        group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div 
                    className="mb-6"
                    variants={tagVariants}
                  >
                    <div className="flex flex-wrap gap-1 text-xs">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-gray-500 font-mono"
                        >
                          {tech}{techIndex < project.technologies.length - 1 && ' • '}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github} 
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono"
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github size={16} />
                      <span>CODE</span>
                    </motion.a>
                    
                    <motion.a 
                      href={project.demo} 
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors font-mono"
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={16} />
                      <span>DEMO</span>
                    </motion.a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div 
          className="text-center mt-16"
          variants={cardVariants}
        >
          <motion.button
            className="group flex items-center gap-3 mx-auto px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 
            border border-cyan-400/30 rounded-full text-cyan-400 font-mono text-sm tracking-wide
            hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 hover:border-cyan-400/50 
            transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernProjects;
