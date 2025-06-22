
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

const BookDesignProjects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
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

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % projects.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentPage];

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Book Title */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-serif text-amber-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl text-amber-700 font-light italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A curated collection of innovative solutions
          </motion.p>
        </div>

        {/* Book Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Book Shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/30 rounded-2xl transform translate-x-2 translate-y-2 blur-sm" />
          
          {/* Book Cover */}
          <motion.div 
            className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl border border-amber-200 shadow-2xl overflow-hidden"
            initial={{ rotateY: -15 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Book Binding */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-800 to-amber-900">
              <div className="w-full h-full bg-gradient-to-r from-amber-700/50 to-transparent" />
            </div>

            {/* Page Content */}
            <div className="pl-12 pr-8 py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]"
                >
                  {/* Project Info */}
                  <div className="space-y-6">
                    {/* Page Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <Bookmark className="text-amber-600" size={20} />
                      <span className="text-amber-600 font-mono text-sm">Chapter {currentProject.pageNumber}</span>
                    </div>

                    {/* Category */}
                    <div className="inline-block px-4 py-2 bg-amber-200/50 text-amber-800 rounded-full text-sm font-medium">
                      {currentProject.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl font-serif text-amber-900 leading-tight">
                      {currentProject.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xl text-amber-700 font-light italic">
                      {currentProject.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-amber-800 leading-relaxed text-lg">
                      {currentProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-700 rounded-md text-sm border border-amber-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <motion.a 
                        href={currentProject.github}
                        className="flex items-center gap-2 px-6 py-3 bg-amber-800 text-amber-50 rounded-lg hover:bg-amber-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        View Code
                      </motion.a>
                      
                      <motion.a 
                        href={currentProject.demo}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-amber-800 text-amber-800 rounded-lg hover:bg-amber-800 hover:text-amber-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
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
                    <div className="relative bg-amber-200/30 rounded-xl p-4 border-2 border-amber-200">
                      <div className="aspect-video rounded-lg overflow-hidden bg-white shadow-lg">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          src={currentProject.video}
                        >
                          <source src={currentProject.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    
                    {/* Decorative Corner */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600 rounded-full shadow-lg" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 right-8 flex items-center gap-4">
              <motion.button
                onClick={prevPage}
                className="p-3 bg-amber-200 text-amber-800 rounded-full hover:bg-amber-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              <span className="text-amber-700 font-mono text-sm">
                {currentPage + 1} / {projects.length}
              </span>
              
              <motion.button
                onClick={nextPage}
                className="p-3 bg-amber-200 text-amber-800 rounded-full hover:bg-amber-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Page Tabs */}
            <div className="absolute right-0 top-12 bottom-12 w-8 flex flex-col justify-center gap-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-6 h-16 rounded-l-md transition-colors ${
                    index === currentPage 
                      ? 'bg-amber-600' 
                      : 'bg-amber-300 hover:bg-amber-400'
                  }`}
                  whileHover={{ x: -2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDesignProjects;
