
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ModernProjects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const tagVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "InfHub - College Social Platform",
      description: "Social media platform for college students with real-time messaging, event management, and academic resources sharing.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      videoSrc: "/videos/infhub.mp4",
      githubUrl: "https://github.com/Suyashh-s",
      liveUrl: "#",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 2,
      title: "Lokyatri - Travel Companion",
      description: "AI-powered travel planning app with personalized itineraries, budget tracking, and local recommendations.",
      tags: ["React Native", "Python", "FastAPI", "OpenAI"],
      videoSrc: "/videos/lokyatri.mp4",
      githubUrl: "https://github.com/Suyashh-s",
      liveUrl: "#",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Raksha - Security System",
      description: "Computer vision-based security monitoring system with real-time threat detection and alert notifications.",
      tags: ["Python", "OpenCV", "YOLO", "Flask"],
      videoSrc: "/videos/raksha.mp4",
      githubUrl: "https://github.com/Suyashh-s",
      liveUrl: "#",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 4,
      title: "Vyom - Space Explorer",
      description: "Interactive space exploration platform with 3D visualizations, real-time space data, and educational content.",
      tags: ["Three.js", "React", "WebGL", "NASA API"],
      videoSrc: "/videos/vyom.mp4",
      githubUrl: "https://github.com/Suyashh-s",
      liveUrl: "#",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 noise-texture opacity-5" />
      
      {/* Floating Orbs - Responsive */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gradient-radial from-purple-400/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        {/* Header - Responsive */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2 
            variants={titleVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={tagVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Innovative solutions built with cutting-edge technologies, 
            showcasing expertise in full-stack development and AI integration.
          </motion.p>
        </div>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Project Card */}
              <motion.div 
                className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 hover:border-cyan-400/20"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Video Container - Responsive */}
                <div className="relative aspect-video overflow-hidden">
                  <video
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  
                  {/* Action Buttons - Responsive */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content - Responsive */}
                <div className="relative p-4 sm:p-6 md:p-8">
                  <motion.h3 
                    variants={titleVariants}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    variants={itemVariants}
                    className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tags - Responsive */}
                  <motion.div 
                    variants={tagVariants}
                    className="flex flex-wrap gap-2 sm:gap-3"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs sm:text-sm text-cyan-400 font-medium hover:border-cyan-400/50 transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: tagIndex * 0.1
                        }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Glow Effect - Responsive */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Floating Number - Responsive */}
              <motion.div
                className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base md:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8">
            Interested in seeing more work or discussing a project?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 text-sm sm:text-base min-h-[44px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernProjects;
