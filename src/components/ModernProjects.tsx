
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Pause } from 'lucide-react';

const ModernProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const projects = [
    {
      id: 1,
      title: "InfHub",
      subtitle: "AI-Powered Information Hub",
      description: "A comprehensive platform that aggregates and processes information using advanced AI algorithms.",
      tags: ["React", "AI/ML", "Python", "PostgreSQL"],
      video: "/videos/infhub.mp4",
      github: "#",
      demo: "#",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "LokYatri",
      subtitle: "Smart Travel Companion",
      description: "Intelligent travel planning application with real-time recommendations and booking integration.",
      tags: ["React Native", "Node.js", "MongoDB", "Maps API"],
      video: "/videos/lokyatri.mp4",
      github: "#",
      demo: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Raksha",
      subtitle: "Security Management System",
      description: "Advanced security monitoring and incident response platform with real-time alerts.",
      tags: ["React", "WebSocket", "Express", "Redis"],
      video: "/videos/raksha.mp4",
      github: "#",
      demo: "#",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      title: "Vyom",
      subtitle: "Aerospace Analytics Platform",
      description: "Comprehensive aerospace data analysis and visualization platform for mission planning.",
      tags: ["React", "D3.js", "Python", "TensorFlow"],
      video: "/videos/vyom.mp4",
      github: "#",
      demo: "#",
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    projects.forEach((_, index) => {
      const video = videoRefs.current[index];
      if (video) {
        video.muted = true;
        video.loop = true;
        video.play().catch(console.error);
        setIsPlaying(prev => ({ ...prev, [index]: true }));
      }
    });
  }, []);

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(prev => ({ ...prev, [index]: true }));
      } else {
        video.pause();
        setIsPlaying(prev => ({ ...prev, [index]: false }));
      }
    }
  };

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

  const titleVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="noise-texture absolute inset-0 opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={titleVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Cutting-edge solutions that push the boundaries of technology and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 hover:border-cyan-400/20">
                {/* Video Container */}
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg sm:rounded-xl">
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
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
                  
                  {/* Video Controls */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => toggleVideo(index)}
                      className="p-3 sm:p-4 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                      aria-label={isPlaying[index] ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying[index] ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <motion.div variants={titleVariants}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-cyan-400 font-medium">
                      {project.subtitle}
                    </p>
                  </motion.div>

                  <motion.p 
                    className="text-sm sm:text-base text-gray-300 leading-relaxed"
                    variants={titleVariants}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={tagVariants}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gray-800/50 text-gray-300 rounded-full border border-gray-600/30 hover:border-cyan-400/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Actions */}
                  <motion.div 
                    className="flex gap-3 sm:gap-4 pt-2 sm:pt-4"
                    variants={tagVariants}
                  >
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 text-sm sm:text-base font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border border-gray-600 text-gray-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ModernProjects;
