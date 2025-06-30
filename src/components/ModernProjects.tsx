
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const ModernProjects: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const projects = [
    {
      id: 1,
      title: "VisionVault",
      description: "Advanced AI-powered computer vision platform for real-time object detection and analysis",
      tags: ["AI/ML", "Computer Vision", "React", "Python"],
      video: "/videos/vyom.mp4",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "InfHub Analytics",
      description: "Comprehensive data analytics dashboard with real-time insights and predictive modeling",
      tags: ["Data Science", "Dashboard", "React", "Node.js"],
      video: "/videos/infhub.mp4",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Raksha Security",
      description: "Next-generation cybersecurity platform with threat detection and automated response",
      tags: ["Cybersecurity", "AI", "React", "Python"],
      video: "/videos/raksha.mp4",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Lokyatri Travel",
      description: "Smart travel planning platform with AI-powered recommendations and booking system",
      tags: ["Travel Tech", "AI", "React", "Node.js"],
      video: "/videos/lokyatri.mp4",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  useEffect(() => {
    // Auto-play videos when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="noise-texture absolute inset-0 opacity-5" />
        <div className="absolute top-1/4 left-4 sm:left-8 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-4 sm:right-8 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-radial from-purple-400/10 to-transparent rounded-full blur-2xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" variants={cardVariants}>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-mono leading-tight"
            variants={titleVariants}
          >
            <span className="text-cyan-400">&lt;</span>
            Featured Projects
            <span className="text-purple-400">/&gt;</span>
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2"
            variants={tagVariants}
          >
            Innovative solutions built with cutting-edge technologies. 
            Each project represents a unique challenge solved with precision and creativity.
          </motion.p>
        </motion.div>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group relative ${
                project.featured 
                  ? 'md:col-span-2 lg:col-span-1' 
                  : ''
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Container */}
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 hover:border-cyan-400/30">
                
                {/* Video Container - Responsive */}
                <div className="relative aspect-video overflow-hidden">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      console.error(`Error loading video for ${project.title}:`, e);
                      e.currentTarget.style.display = 'none';
                    }}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-cyan-400/20 backdrop-blur-sm rounded-full p-3 sm:p-4">
                      <Play size={20} className="text-cyan-400" />
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Title */}
                  <motion.h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 font-mono group-hover:text-cyan-400 transition-colors duration-300"
                    variants={titleVariants}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags - Responsive */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4 sm:mb-6"
                    variants={tagVariants}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-800/50 text-cyan-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono border border-gray-700/50 hover:border-cyan-400/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Buttons - Responsive */}
                  <div className="flex gap-3 sm:gap-4">
                    <motion.a
                      href={project.live}
                      className="flex-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-cyan-400/20 hover:border-cyan-400/40 text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex-1 bg-gray-800/50 hover:bg-gray-800/70 text-gray-300 hover:text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700/50 hover:border-gray-600/50 text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 md:mt-20"
          variants={cardVariants}
        >
          <motion.p 
            className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </motion.p>
          <motion.a
            href="https://github.com/Suyashh-s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25 border border-gray-600/50 hover:border-gray-500/50 text-sm sm:text-base min-h-[44px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View All Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernProjects;
