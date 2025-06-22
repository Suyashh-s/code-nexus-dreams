
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight, BookOpen, Play } from 'lucide-react';

const ThreeDBookProjects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
      category: "AI Safety",
      pageNumber: "01"
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
      category: "Business SaaS",
      pageNumber: "02"
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
      category: "Web3 Platform",
      pageNumber: "03"
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
      category: "Travel Tech",
      pageNumber: "04"
    }
  ];

  useEffect(() => {
    // Ensure all videos play continuously
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(console.error);
      }
    });
  }, [currentPage]);

  const nextPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % projects.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + projects.length) % projects.length);
      setIsFlipping(false);
    }, 300);
  };

  const currentProject = projects[currentPage];

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-black relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl transform -rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Archive
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A 3D journey through innovative solutions and cutting-edge technology
          </motion.p>
        </div>

        {/* 3D Book Container */}
        <div className="relative perspective-[2000px] max-w-5xl mx-auto">
          {/* Book Base Shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/60 rounded-3xl transform translate-y-8 scale-110 blur-2xl" />
          
          {/* 3D Book */}
          <motion.div 
            className="relative preserve-3d"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(5deg) rotateY(-10deg)'
            }}
            animate={{
              rotateX: [5, 3, 5],
              rotateY: [-10, -8, -10]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Book Cover */}
            <motion.div 
              className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl border border-gray-700 shadow-2xl overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              animate={{
                rotateY: isFlipping ? [0, -15, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Book Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 transform skew-y-1">
                <div className="w-full h-full bg-gradient-to-r from-gray-600/30 to-transparent" />
                <div className="absolute inset-y-0 left-1 w-1 bg-gradient-to-b from-cyan-400/50 to-purple-400/50" />
              </div>

              {/* Page Content */}
              <div className="pl-16 pr-8 py-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 50, rotateY: 10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -50, rotateY: -10 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]"
                  >
                    {/* Project Info */}
                    <div className="space-y-6 relative z-10">
                      {/* Page Number */}
                      <div className="flex items-center gap-4 mb-6">
                        <BookOpen className="text-cyan-400" size={20} />
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">
                          Chapter {currentProject.pageNumber}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <motion.div 
                        className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-medium backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {currentProject.category}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-4xl font-bold text-white leading-tight glow-text">
                        {currentProject.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xl text-gray-300 font-light">
                        {currentProject.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {currentProject.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tags.map((tag, index) => (
                          <motion.span 
                            key={index}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-md text-sm border border-gray-700 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <motion.a 
                          href={currentProject.github}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} />
                          View Code
                        </motion.a>
                        
                        <motion.a 
                          href={currentProject.demo}
                          className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all backdrop-blur-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Video */}
                    <div className="relative">
                      <motion.div 
                        className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm"
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="aspect-video rounded-xl overflow-hidden bg-black shadow-2xl relative">
                          <video
                            ref={(el) => (videoRefs.current[currentPage] = el)}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={currentProject.video}
                          >
                            <source src={currentProject.video} type="video/mp4" />
                          </video>
                          
                          {/* Video Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Play Icon */}
                          <div className="absolute bottom-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full">
                            <Play size={16} className="text-white" />
                          </div>
                        </div>
                        
                        {/* 3D Glow Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 -z-10" />
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="absolute bottom-6 right-8 flex items-center gap-4">
                <motion.button
                  onClick={prevPage}
                  disabled={isFlipping}
                  className="p-3 bg-gray-800/80 text-gray-300 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all backdrop-blur-sm disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={20} />
                </motion.button>
                
                <span className="text-gray-400 font-mono text-sm min-w-[60px] text-center">
                  {currentPage + 1} / {projects.length}
                </span>
                
                <motion.button
                  onClick={nextPage}
                  disabled={isFlipping}
                  className="p-3 bg-gray-800/80 text-gray-300 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all backdrop-blur-sm disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>

              {/* Page Indicators */}
              <div className="absolute right-0 top-12 bottom-12 w-8 flex flex-col justify-center gap-2">
                {projects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-6 h-16 rounded-l-lg transition-all ${
                      index === currentPage 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    whileHover={{ x: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDBookProjects;
